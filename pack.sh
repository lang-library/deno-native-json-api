#! /usr/bin/env bash
set -uvx
set -e
deno compile --allow-all --unstable-ffi json-api-test.js
rm -rf tmp
mkdir -p tmp
cp -p json-api-test.exe tmp/
cp -p ~/cmd/PROGRAM.dll tmp/
vbpack -i tmp/json-api-test.exe -o ./json-api-test.packed.exe
