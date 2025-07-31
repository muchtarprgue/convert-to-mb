const conv = require("./index");

test("convert to KBs",()=>{
    expect(conv.convertMB(1000)).toBe("1.00 KB");
    expect(conv.convertMB(1234)).toBe("1.23 KB");
});
test("convert to MBs",()=>{
    expect(conv.convertMB(1000000)).toBe("1.00 MB");
    expect(conv.convertMB(1234000)).toBe("1.23 MB");
})