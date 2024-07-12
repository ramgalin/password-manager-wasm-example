@echo off

if not exist build (
    mkdir build
)

cd build

REM Make sure you ran `/path/to/emsdk/emsdk_env.bat`
emcmake cmake .. -G Ninja

emmake make

cd ..