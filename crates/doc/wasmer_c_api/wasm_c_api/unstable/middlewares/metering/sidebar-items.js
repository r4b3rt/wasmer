initSidebarItems({"fn":[["wasmer_metering_as_middleware","Transforms a [`wasmer_metering_t`] into a generic [`wasmer_middleware_t`], to then be pushed in the configuration with [`wasm_config_push_middleware`][super::wasm_config_push_middleware]."],["wasmer_metering_delete","Deletes a [`wasmer_metering_t`]."],["wasmer_metering_get_remaining_points","Returns the remaining metering points. `u64::MAX` means points are exhausted, otherwise it returns the number of points. Notice that it could include zero! Zero doesn’t mean points are exhausted yet."],["wasmer_metering_new","Creates a new metering middleware with an initial limit, i.e. a total number of operators to execute (regarding their respective cost), in addition to a cost function. The cost function defines the cost of an operation, that will decrease the initial limit."],["wasmer_metering_points_are_exhausted","Returns true if the remaning points are exhausted, false otherwise."],["wasmer_metering_set_remaining_points","Set a new amount of points for the given metering middleware."]],"struct":[["wasmer_metering_t","Opaque type representing a metering middleware."]],"type":[["wasmer_metering_cost_function_t","Function type to represent a user-defined cost function implemented in C."]]});