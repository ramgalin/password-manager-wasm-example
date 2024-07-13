#!/bin/bash

# Create build directory if it doesn't exist
if [ ! -d "build" ]; then
    mkdir build
fi

cd build

# Remove CMakeCache.txt if it exists
if [ -f "CMakeCache.txt" ]; then
    rm CMakeCache.txt
fi

# Remove built password_manager.* if they already exists, to rebuild them from scratch
if [ -f "password_manager.js" ]; then
    rm password_manager.js
fi


if [ -f "password_manager.wasm" ]; then
    rm password_manager.wasm
fi


if [ -f "password_manager.d.ts" ]; then
    rm password_manager.d.ts
fi


# Make sure you ran `source /path/to/emsdk/emsdk_env.sh`
emcmake cmake .. -G Ninja
if [ $? -ne 0 ]; then
    exit 1
fi

emmake ninja
if [ $? -ne 0 ]; then
    exit 1
fi

cd ..

npx webpack
if [ $? -ne 0 ]; then
    exit 1
fi