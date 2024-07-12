#!/bin/bash

if [ ! -d "build" ]; then
    mkdir build
fi

cd build

# Make sure you ran `source /path/to/emsdk/emsdk_env.sh`
emcmake cmake .. -G ninja
if [ $? -ne 0 ]; then
    exit 1
fi
emmake make
if [ $? -ne 0 ]; then
    exit 1
fi

cd ..