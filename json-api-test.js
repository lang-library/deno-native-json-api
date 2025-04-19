#! /usr/bin/env -S deno run --allow-all --unstable-ffi
import { NativeJsonApi } from "https://github.com/lang-library/deno-native-json-api/raw/2025.0419.1536.24/NativeJsonApi.js";
//import { NativeJsonApi } from "./NativeJsonApi.js";

const libName = "PROGRAM.dll"
var dll = new NativeJsonApi(libName);
console.log(dll.Call("add2", [33, 44]));
console.log(dll.Call("add2", [33, 44, 55]));
