#! /usr/bin/env -S deno run --allow-all --unstable-ffi
import { NativeJsonApi } from "https://github.com/lang-library/deno-native-json-api/raw/2025.0419.1739.52/NativeJsonApi.js";
//import { NativeJsonApi } from "./NativeJsonApi.js";

const $libName = "PROGRAM.dll"
var $api = new NativeJsonApi($libName);
console.log($api.call("add2", [33, 44]));
console.log($api.call$("add2", 11, 22));
//console.log($api.call("add2", [33, 44, 55]));
