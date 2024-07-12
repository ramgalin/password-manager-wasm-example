cmake_minimum_required(VERSION 3.18)
project(password_manager)

set(CMAKE_CXX_STANDARD 17)

set(SOURCE_FILES password_storage.cpp)

set(CMAKE_TOOLCHAIN_FILE "C:/Code/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake")

# Add the executable
add_executable(password_manager ${SOURCE_FILES})

# Specify the output target properties
set_target_properties(password_manager PROPERTIES
        OUTPUT_NAME "password_manager"
        SUFFIX ".js"
)

# Add the necessary linker flags
set_target_properties(password_manager PROPERTIES
        LINK_FLAGS "-s MODULARIZE=1 -s EXPORTED_RUNTIME_METHODS='[\"cwrap\"]' --bind"
)