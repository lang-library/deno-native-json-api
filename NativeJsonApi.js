export class NativeJsonApi {
  constructor(dllName) {
    this.dllName = dllName;
    this.lib = Deno.dlopen(this.dllName, {
      Call: { parameters: ["buffer", "buffer"], result: "pointer" },
    });
  }
  call(name, args) {
    let input = JSON.stringify(args, null, 2);
    const buffer1 = StringToCStringBuffer(name);
    const buffer2 = StringToCStringBuffer(input);
    const ret = this.lib.symbols.Call(buffer1, buffer2);
    const output = CStringPointerToString(ret);
    let result = JSON.parse(output);
    if ((typeof result) === 'string') {
      throw new Error(result);
    }
    return result[0];
  }
  call$(name, ...args) {
    return this.call(name, args);
  }
}

function StringToCStringBuffer(s) {
  // C 文字列は末尾に \0 を置く必要がある
  return new TextEncoder().encode(`${s}\0`).buffer;
}

function CStringPointerToString(p) {
  const dataView = new Deno.UnsafePointerView(p);
  return dataView.getCString();
}
