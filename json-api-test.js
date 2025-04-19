#! /usr/bin/env -S deno run --allow-all --unstable-ffi
//import { NativeJsonApi } from "https://github.com/lang-library/deno-lib01/raw/2024.0203.1540/json-dll.js";
import { NativeJsonApi } from "./NativeJsonApi.js";

const libName = "PROGRAM.dll"
var dll = new NativeJsonApi(libName);
console.log(dll.Call("add2", [33, 44]));
console.log(dll.Call("add2", [33, 44, 55]));
