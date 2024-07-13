cmake_minimum_required(VERSION 3.18)
project(password_manager)

set(CMAKE_CXX_STANDARD 17)

#set(CMAKE_TOOLCHAIN_FILE "C:/Code/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake")
set(CMAKE_TOOLCHAIN_FILE "/home/ramdau/Documents/GalinRamilPR/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake")
#set(CMAKE_TOOLCHAIN_FILE "/your/path/to/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake")

add_executable(password_manager password_manager.cpp)

set_target_properties(
    password_manager
    PROPERTIES
        OUTPUT_NAME "password_manager"
        SUFFIX ".js"
)

set_target_properties(password_manager PROPERTIES
    LINK_FLAGS "-s MODULARIZE=1 -s EXPORTED_RUNTIME_METHODS='[\"cwrap\"]' --bind -lembind --emit-tsd=password_manager.d.ts"
)

set(OUTPUT_JS "${CMAKE_BINARY_DIR}/password_manager.js")
set(OUTPUT_WASM "${CMAKE_BINARY_DIR}/password_manager.wasm")
set(OUTPUT_D_TS "${CMAKE_BINARY_DIR}/password_manager.d.ts")
set(SRC_DIR "${CMAKE_SOURCE_DIR}/src")

# Copy the generated JS and .d.ts files to the src directory
add_custom_command(TARGET password_manager POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy ${OUTPUT_JS} ${SRC_DIR}/password_manager.js
    COMMAND ${CMAKE_COMMAND} -E copy ${OUTPUT_D_TS} ${SRC_DIR}/password_manager.d.ts
    COMMAND ${CMAKE_COMMAND} -E copy ${OUTPUT_WASM} ${SRC_DIR}/password_manager.wasm
)