(function() {var implementors = {};
implementors["wasmer"] = [{"text":"impl Debug for HostEnvInitError","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug&gt; Debug for LazyInit&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Debug for ExportError","synthetic":false,"types":[]},{"text":"impl Debug for Exports","synthetic":false,"types":[]},{"text":"impl Debug for Function","synthetic":false,"types":[]},{"text":"impl&lt;Args:&nbsp;Debug, Rets:&nbsp;Debug&gt; Debug for Function&lt;Args, Rets&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Global","synthetic":false,"types":[]},{"text":"impl Debug for Memory","synthetic":false,"types":[]},{"text":"impl Debug for Extern","synthetic":false,"types":[]},{"text":"impl Debug for ImportObject","synthetic":false,"types":[]},{"text":"impl Debug for InstantiationError","synthetic":false,"types":[]},{"text":"impl Debug for Instance","synthetic":false,"types":[]},{"text":"impl Debug for IoCompileError","synthetic":false,"types":[]},{"text":"impl Debug for Module","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy, Ty&gt; Debug for WasmPtr&lt;T, Ty&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Store","synthetic":false,"types":[]}];
implementors["wasmer_c_api"] = [{"text":"impl Debug for Version","synthetic":false,"types":[]},{"text":"impl Debug for CApiError","synthetic":false,"types":[]},{"text":"impl Debug for wasmer_compiler_t","synthetic":false,"types":[]},{"text":"impl Debug for wasmer_engine_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_config_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_func_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_global_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_memory_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_extern_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_exporttype_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_externtype_t","synthetic":false,"types":[]},{"text":"impl Debug for ExternTypeConversionError","synthetic":false,"types":[]},{"text":"impl Debug for wasm_frame_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_frame_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_functype_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_functype_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_globaltype_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_globaltype_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_importtype_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_memorytype_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_memorytype_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_limits_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_mutability_enum","synthetic":false,"types":[]},{"text":"impl Debug for wasm_tabletype_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_tabletype_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_valkind_enum","synthetic":false,"types":[]},{"text":"impl Debug for wasm_valtype_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_valtype_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_byte_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for owned_wasm_name_t","synthetic":false,"types":[]},{"text":"impl Debug for wasmer_features_t","synthetic":false,"types":[]},{"text":"impl Debug for wasmer_middleware_t","synthetic":false,"types":[]},{"text":"impl Debug for wasmer_target_t","synthetic":false,"types":[]},{"text":"impl Debug for wasmer_named_extern_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_val_t","synthetic":false,"types":[]},{"text":"impl Debug for wasm_val_vec_t","synthetic":false,"types":[]},{"text":"impl Debug for wasi_config_t","synthetic":false,"types":[]},{"text":"impl Debug for wasi_version_t","synthetic":false,"types":[]}];
implementors["wasmer_cache"] = [{"text":"impl Debug for Hash","synthetic":false,"types":[]}];
implementors["wasmer_cli"] = [{"text":"impl Debug for Cache","synthetic":false,"types":[]},{"text":"impl Debug for Config","synthetic":false,"types":[]},{"text":"impl Debug for Inspect","synthetic":false,"types":[]},{"text":"impl Debug for Wasi","synthetic":false,"types":[]},{"text":"impl Debug for Run","synthetic":false,"types":[]},{"text":"impl Debug for SelfUpdate","synthetic":false,"types":[]},{"text":"impl Debug for Validate","synthetic":false,"types":[]},{"text":"impl Debug for Wast","synthetic":false,"types":[]},{"text":"impl Debug for WasmFeatures","synthetic":false,"types":[]},{"text":"impl Debug for PrettyError","synthetic":false,"types":[]},{"text":"impl Debug for CType","synthetic":false,"types":[]},{"text":"impl Debug for CStatement","synthetic":false,"types":[]},{"text":"impl Debug for StoreOptions","synthetic":false,"types":[]},{"text":"impl Debug for CompilerOptions","synthetic":false,"types":[]},{"text":"impl Debug for CompilerType","synthetic":false,"types":[]},{"text":"impl Debug for EngineType","synthetic":false,"types":[]}];
implementors["wasmer_compiler_cranelift"] = [{"text":"impl Debug for CraneliftOptLevel","synthetic":false,"types":[]},{"text":"impl Debug for Cranelift","synthetic":false,"types":[]},{"text":"impl Debug for ModuleInfoMemoryOffset","synthetic":false,"types":[]},{"text":"impl Debug for ModuleInfoVmctxInfo","synthetic":false,"types":[]},{"text":"impl Debug for WriterRelocate","synthetic":false,"types":[]},{"text":"impl Debug for ReturnMode","synthetic":false,"types":[]},{"text":"impl Debug for ElseData","synthetic":false,"types":[]},{"text":"impl Debug for ControlStackFrame","synthetic":false,"types":[]},{"text":"impl Debug for ValueExtraInfo","synthetic":false,"types":[]}];
implementors["wasmer_compiler_llvm"] = [{"text":"impl Debug for CompiledKind","synthetic":false,"types":[]},{"text":"impl Debug for LLVM","synthetic":false,"types":[]},{"text":"impl Debug for ElfSectionIndex","synthetic":false,"types":[]},{"text":"impl&lt;'ctx&gt; Debug for ControlFrame&lt;'ctx&gt;","synthetic":false,"types":[]},{"text":"impl Debug for IfElseState","synthetic":false,"types":[]},{"text":"impl Debug for ExtraInfo","synthetic":false,"types":[]},{"text":"impl&lt;'ctx&gt; Debug for State&lt;'ctx&gt;","synthetic":false,"types":[]}];
implementors["wasmer_compiler_singlepass"] = [{"text":"impl Debug for TrapTable","synthetic":false,"types":[]},{"text":"impl Debug for FloatValue","synthetic":false,"types":[]},{"text":"impl Debug for CanonicalizeType","synthetic":false,"types":[]},{"text":"impl Debug for ControlFrame","synthetic":false,"types":[]},{"text":"impl Debug for IfElseState","synthetic":false,"types":[]},{"text":"impl Debug for CodegenError","synthetic":false,"types":[]},{"text":"impl Debug for RegisterIndex","synthetic":false,"types":[]},{"text":"impl Debug for WasmAbstractValue","synthetic":false,"types":[]},{"text":"impl Debug for MachineState","synthetic":false,"types":[]},{"text":"impl Debug for MachineStateDiff","synthetic":false,"types":[]},{"text":"impl Debug for MachineValue","synthetic":false,"types":[]},{"text":"impl Debug for FunctionStateMap","synthetic":false,"types":[]},{"text":"impl Debug for SuspendOffset","synthetic":false,"types":[]},{"text":"impl Debug for OffsetInfo","synthetic":false,"types":[]},{"text":"impl Debug for Singlepass","synthetic":false,"types":[]},{"text":"impl Debug for Location","synthetic":false,"types":[]},{"text":"impl Debug for Condition","synthetic":false,"types":[]},{"text":"impl Debug for Size","synthetic":false,"types":[]},{"text":"impl Debug for XMMOrMemory","synthetic":false,"types":[]},{"text":"impl Debug for GPROrMemory","synthetic":false,"types":[]},{"text":"impl Debug for GPR","synthetic":false,"types":[]},{"text":"impl Debug for XMM","synthetic":false,"types":[]},{"text":"impl Debug for X64Register","synthetic":false,"types":[]}];
implementors["wasmer_derive"] = [{"text":"impl Debug for ExportExpr","synthetic":false,"types":[]},{"text":"impl Debug for ExportOptions","synthetic":false,"types":[]}];
implementors["wasmer_emscripten"] = [{"text":"impl Debug for EmAddrInfo","synthetic":false,"types":[]},{"text":"impl Debug for EmSockAddr","synthetic":false,"types":[]},{"text":"impl Debug for LongJumpRet","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy, Ty&gt; Debug for WasmPtr&lt;T, Ty&gt;","synthetic":false,"types":[]},{"text":"impl Debug for EmPollFd","synthetic":false,"types":[]},{"text":"impl Debug for LibcDirWrapper","synthetic":false,"types":[]},{"text":"impl Debug for EmscriptenGlobalsData","synthetic":false,"types":[]}];
implementors["wasmer_engine"] = [{"text":"impl Debug for EngineId","synthetic":false,"types":[]},{"text":"impl Debug for SerializeError","synthetic":false,"types":[]},{"text":"impl Debug for DeserializeError","synthetic":false,"types":[]},{"text":"impl Debug for ImportError","synthetic":false,"types":[]},{"text":"impl Debug for LinkError","synthetic":false,"types":[]},{"text":"impl Debug for InstantiationError","synthetic":false,"types":[]},{"text":"impl Debug for Export","synthetic":false,"types":[]},{"text":"impl Debug for ExportFunctionMetadata","synthetic":false,"types":[]},{"text":"impl Debug for ExportFunction","synthetic":false,"types":[]},{"text":"impl Debug for ExportTable","synthetic":false,"types":[]},{"text":"impl Debug for ExportMemory","synthetic":false,"types":[]},{"text":"impl Debug for ExportGlobal","synthetic":false,"types":[]},{"text":"impl Debug for RuntimeErrorSource","synthetic":false,"types":[]},{"text":"impl Debug for RuntimeError","synthetic":false,"types":[]},{"text":"impl Debug for FunctionInfo","synthetic":false,"types":[]},{"text":"impl Debug for FunctionExtent","synthetic":false,"types":[]},{"text":"impl Debug for FrameInfo","synthetic":false,"types":[]}];
implementors["wasmer_engine_native"] = [{"text":"impl Debug for ModuleMetadata","synthetic":false,"types":[]}];
implementors["wasmer_engine_object_file"] = [{"text":"impl Debug for ModuleMetadata","synthetic":false,"types":[]}];
implementors["wasmer_integration_tests_cli"] = [{"text":"impl Debug for LinkCode","synthetic":false,"types":[]},{"text":"impl Debug for Compiler","synthetic":false,"types":[]},{"text":"impl Debug for Engine","synthetic":false,"types":[]}];
implementors["wasmer_middlewares"] = [{"text":"impl Debug for MeteringGlobalIndexes","synthetic":false,"types":[]},{"text":"impl Debug for MeteringPoints","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Fn(&amp;Operator&lt;'_&gt;) -&gt; u64 + Send + Sync&gt; Debug for Metering&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Fn(&amp;Operator&lt;'_&gt;) -&gt; u64 + Send + Sync&gt; Debug for FunctionMetering&lt;F&gt;","synthetic":false,"types":[]}];
implementors["wasmer_object"] = [{"text":"impl Debug for ObjectError","synthetic":false,"types":[]}];
implementors["wasmer_vm"] = [{"text":"impl Debug for VMExport","synthetic":false,"types":[]},{"text":"impl Debug for VMExportFunction","synthetic":false,"types":[]},{"text":"impl Debug for VMExportTable","synthetic":false,"types":[]},{"text":"impl Debug for VMExportMemory","synthetic":false,"types":[]},{"text":"impl Debug for VMExportGlobal","synthetic":false,"types":[]},{"text":"impl Debug for FuncDataRegistry","synthetic":false,"types":[]},{"text":"impl Debug for VMFuncRef","synthetic":false,"types":[]},{"text":"impl Debug for Inner","synthetic":false,"types":[]},{"text":"impl Debug for Global","synthetic":false,"types":[]},{"text":"impl Debug for GlobalError","synthetic":false,"types":[]},{"text":"impl Debug for InstanceRef","synthetic":false,"types":[]},{"text":"impl Debug for ImportFunctionEnv","synthetic":false,"types":[]},{"text":"impl Debug for Instance","synthetic":false,"types":[]},{"text":"impl Debug for InstanceHandle","synthetic":false,"types":[]},{"text":"impl Debug for MemoryError","synthetic":false,"types":[]},{"text":"impl Debug for MemoryStyle","synthetic":false,"types":[]},{"text":"impl Debug for LinearMemory","synthetic":false,"types":[]},{"text":"impl Debug for VMMemoryDefinitionOwnership","synthetic":false,"types":[]},{"text":"impl Debug for WasmMmap","synthetic":false,"types":[]},{"text":"impl Debug for Mmap","synthetic":false,"types":[]},{"text":"impl Debug for ModuleId","synthetic":false,"types":[]},{"text":"impl Debug for ModuleInfo","synthetic":false,"types":[]},{"text":"impl Debug for SignatureRegistry","synthetic":false,"types":[]},{"text":"impl Debug for Inner","synthetic":false,"types":[]},{"text":"impl Debug for TableStyle","synthetic":false,"types":[]},{"text":"impl Debug for TableElement","synthetic":false,"types":[]},{"text":"impl Debug for RawTableElement","synthetic":false,"types":[]},{"text":"impl Debug for LinearTable","synthetic":false,"types":[]},{"text":"impl Debug for VMTableDefinitionOwnership","synthetic":false,"types":[]},{"text":"impl Debug for TrapCode","synthetic":false,"types":[]},{"text":"impl Debug for Trap","synthetic":false,"types":[]},{"text":"impl Debug for VMFunctionEnvironment","synthetic":false,"types":[]},{"text":"impl Debug for VMFunctionImport","synthetic":false,"types":[]},{"text":"impl Debug for VMFunctionKind","synthetic":false,"types":[]},{"text":"impl Debug for VMTableImport","synthetic":false,"types":[]},{"text":"impl Debug for VMMemoryImport","synthetic":false,"types":[]},{"text":"impl Debug for VMGlobalImport","synthetic":false,"types":[]},{"text":"impl Debug for VMMemoryDefinition","synthetic":false,"types":[]},{"text":"impl Debug for VMTableDefinition","synthetic":false,"types":[]},{"text":"impl Debug for VMGlobalDefinitionStorage","synthetic":false,"types":[]},{"text":"impl Debug for VMGlobalDefinition","synthetic":false,"types":[]},{"text":"impl Debug for VMSharedSignatureIndex","synthetic":false,"types":[]},{"text":"impl Debug for VMCallerCheckedAnyfunc","synthetic":false,"types":[]},{"text":"impl Debug for VMBuiltinFunctionIndex","synthetic":false,"types":[]},{"text":"impl Debug for VMContext","synthetic":false,"types":[]},{"text":"impl Debug for VMOffsets","synthetic":false,"types":[]},{"text":"impl Debug for TargetSharedSignatureIndex","synthetic":false,"types":[]},{"text":"impl Debug for LibCall","synthetic":false,"types":[]},{"text":"impl Debug for FunctionBodyPtr","synthetic":false,"types":[]},{"text":"impl Debug for SectionBodyPtr","synthetic":false,"types":[]}];
implementors["wasmer_wasi"] = [{"text":"impl&lt;T:&nbsp;Copy, Ty&gt; Debug for WasmPtr&lt;T, Ty&gt;","synthetic":false,"types":[]},{"text":"impl Debug for WasiStateBuilder","synthetic":false,"types":[]},{"text":"impl Debug for WasiStateCreationError","synthetic":false,"types":[]},{"text":"impl Debug for PreopenDirBuilder","synthetic":false,"types":[]},{"text":"impl Debug for PreopenedDir","synthetic":false,"types":[]},{"text":"impl Debug for WasiFsError","synthetic":false,"types":[]},{"text":"impl Debug for PollEvent","synthetic":false,"types":[]},{"text":"impl Debug for PollEventBuilder","synthetic":false,"types":[]},{"text":"impl Debug for PollEventIter","synthetic":false,"types":[]},{"text":"impl Debug for HostFile","synthetic":false,"types":[]},{"text":"impl Debug for Stdout","synthetic":false,"types":[]},{"text":"impl Debug for Stderr","synthetic":false,"types":[]},{"text":"impl Debug for Stdin","synthetic":false,"types":[]},{"text":"impl Debug for Pipe","synthetic":false,"types":[]},{"text":"impl Debug for InodeVal","synthetic":false,"types":[]},{"text":"impl Debug for Kind","synthetic":false,"types":[]},{"text":"impl Debug for Fd","synthetic":false,"types":[]},{"text":"impl Debug for WasiFs","synthetic":false,"types":[]},{"text":"impl Debug for WasiState","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_ciovec_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_dirent_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_event_fd_readwrite_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_event_u","synthetic":false,"types":[]},{"text":"impl Debug for EventEnum","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_event_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_prestat_u_dir_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_prestat_u","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_prestat_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_fdstat_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_filestat_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_iovec_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_subscription_clock_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_subscription_fs_readwrite_t","synthetic":false,"types":[]},{"text":"impl Debug for EventType","synthetic":false,"types":[]},{"text":"impl Debug for WasiSubscription","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_subscription_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_subscription_clock_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_filestat_t","synthetic":false,"types":[]},{"text":"impl Debug for __wasi_subscription_t","synthetic":false,"types":[]},{"text":"impl Debug for WasiVersion","synthetic":false,"types":[]},{"text":"impl Debug for WasiError","synthetic":false,"types":[]},{"text":"impl Debug for WasiEnv","synthetic":false,"types":[]}];
implementors["wasmer_wasi_experimental_io_devices"] = [{"text":"impl Debug for InputEvent","synthetic":false,"types":[]},{"text":"impl Debug for FrameBufferFileType","synthetic":false,"types":[]},{"text":"impl Debug for FrameBufferState","synthetic":false,"types":[]},{"text":"impl Debug for FrameBuffer","synthetic":false,"types":[]}];
implementors["wasmer_wast"] = [{"text":"impl Debug for DirectiveError","synthetic":false,"types":[]},{"text":"impl Debug for DirectiveErrors","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for WasiTest&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for wasi_test","synthetic":false,"types":[]},{"text":"impl Debug for envs","synthetic":false,"types":[]},{"text":"impl Debug for args","synthetic":false,"types":[]},{"text":"impl Debug for preopens","synthetic":false,"types":[]},{"text":"impl Debug for map_dirs","synthetic":false,"types":[]},{"text":"impl Debug for temp_dirs","synthetic":false,"types":[]},{"text":"impl Debug for assert_return","synthetic":false,"types":[]},{"text":"impl Debug for stdin","synthetic":false,"types":[]},{"text":"impl Debug for assert_stdout","synthetic":false,"types":[]},{"text":"impl Debug for assert_stderr","synthetic":false,"types":[]},{"text":"impl Debug for fake_i64_const","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for Envs&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for Args&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for Preopens&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for MapDirs&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for TempDirs&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for AssertReturn","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for Stdin&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for AssertStdout&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for AssertStderr&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for OutputCapturerer","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()