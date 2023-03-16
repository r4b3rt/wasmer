use crate::errors::RuntimeError;
use crate::store::{AsStoreMut, AsStoreRef};
use crate::value::Value;
use crate::vm::{VMExtern, VMGlobal};
use crate::GlobalType;
use crate::Mutability;
use rusty_jsc::{JSObject, JSValue};
use wasmer_types::{RawValue, Type};

#[derive(Debug, Clone, PartialEq)]
pub struct Global {
    pub(crate) handle: VMGlobal,
}

// Global can't be Send in js because it dosen't support `structuredClone`
// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
// unsafe impl Send for Global {}

impl Global {
    pub(crate) fn to_vm_extern(&self) -> VMExtern {
        VMExtern::Global(self.handle.clone())
    }

    /// Create a `Global` with the initial value [`Value`] and the provided [`Mutability`].
    pub(crate) fn from_value(
        store: &mut impl AsStoreMut,
        val: Value,
        mutability: Mutability,
    ) -> Result<Self, RuntimeError> {
        if !val.is_from_store(store) {
            return Err(RuntimeError::new("cross-`Store` values are not supported"));
        }
        let global_ty = GlobalType {
            mutability,
            ty: val.ty(),
        };
        let store_mut = store.as_store_mut();
        let engine = store_mut.engine();
        let context = engine.0.context();

        let mut descriptor = JSObject::new(&context);
        let (type_str, value) = match val {
            Value::I32(i) => ("i32", JSValue::number(&context, i as _)),
            Value::I64(i) => ("i64", JSValue::number(&context, i as _)),
            Value::F32(f) => ("f32", JSValue::number(&context, f as _)),
            Value::F64(f) => ("f64", JSValue::number(&context, f)),
            _ => unimplemented!("The type is not yet supported in the JS Global API"),
        };
        // This is the value type as string, even though is incorrectly called "value"
        // in the JS API.
        descriptor.set_property(
            &context,
            "value".into(),
            JSValue::string(&context, type_str.into()).unwrap(),
        );
        descriptor.set_property(
            &context,
            "mutable".into(),
            JSValue::boolean(&context, mutability.is_mutable()),
        );

        let js_global = engine
            .0
            .wasm_global_type()
            .construct(&context, &[descriptor.to_jsvalue(), value])
            .map_err(|e| <JSValue as Into<RuntimeError>>::into(e))?;
        let vm_global = VMGlobal::new(js_global, global_ty);
        Ok(Self::from_vm_extern(store, vm_global))
    }

    pub fn ty(&self, _store: &impl AsStoreRef) -> GlobalType {
        self.handle.ty
    }

    pub fn get(&self, store: &mut impl AsStoreMut) -> Value {
        // unsafe {
        //     let value = self.handle.global.value();
        //     let ty = self.handle.ty;
        //     let raw = match ty.ty {
        //         Type::I32 => RawValue {
        //             i32: value.as_f64().unwrap() as _,
        //         },
        //         Type::I64 => RawValue {
        //             i64: value.as_f64().unwrap() as _,
        //         },
        //         Type::F32 => RawValue {
        //             f32: value.as_f64().unwrap() as _,
        //         },
        //         Type::F64 => RawValue {
        //             f64: value.as_f64().unwrap(),
        //         },
        //         Type::V128 => RawValue {
        //             u128: value.as_f64().unwrap() as _,
        //         },
        //         Type::FuncRef => {
        //             unimplemented!();
        //             // Self::FuncRef(VMFuncRef::from_raw(raw).map(|f| Function::from_vm_funcref(store, f)))
        //         }
        //         Type::ExternRef => {
        //             unimplemented!();
        //             // Self::ExternRef(
        //             //     VMExternRef::from_raw(raw).map(|e| ExternRef::from_vm_externref(store, e)),
        //             // )
        //         }
        //     };
        //     Value::from_raw(store, ty.ty, raw)
        // }
        unimplemented!();
    }

    pub fn set(&self, store: &mut impl AsStoreMut, val: Value) -> Result<(), RuntimeError> {
        // if !val.is_from_store(store) {
        //     return Err(RuntimeError::new(
        //         "cross-`WasmerEnv` values are not supported",
        //     ));
        // }
        // let global_ty = self.ty(&store);
        // if global_ty.mutability == Mutability::Const {
        //     return Err(RuntimeError::new("The global is immutable".to_owned()));
        // }
        // if val.ty() != global_ty.ty {
        //     return Err(RuntimeError::new("The types don't match".to_owned()));
        // }
        // let new_value = match val {
        //     Value::I32(i) => JSValue::from_f64(i as _),
        //     Value::I64(i) => JSValue::from_f64(i as _),
        //     Value::F32(f) => JSValue::from_f64(f as _),
        //     Value::F64(f) => JSValue::from_f64(f),
        //     _ => {
        //         return Err(RuntimeError::new(
        //             "The type is not yet supported in the JS Global API".to_owned(),
        //         ))
        //     }
        // };
        // self.handle.global.set_value(&new_value);
        // Ok(())
        unimplemented!();
    }

    pub(crate) fn from_vm_extern(store: &mut impl AsStoreMut, vm_global: VMGlobal) -> Self {
        use crate::jsc::store::StoreObject;
        VMGlobal::list_mut(store.objects_mut()).push(vm_global.clone());
        Self { handle: vm_global }
    }

    pub fn is_from_store(&self, _store: &impl AsStoreRef) -> bool {
        true
    }
}
