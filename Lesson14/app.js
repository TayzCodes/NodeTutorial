var buf = new Buffer('Hello','utf-8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('wo');
console.log(buf.toString());


//ES6 raw data dealing
var arrBuf = new ArrayBuffer(8);// v8 feature  8 bytes of data
var view = new Int32Array(arrBuf);
view[0] = 5;//4 bytes
view[1] = 15;//4 byte
console.log(view);

/**
 * characters as numbers
 * H E L L O
 * [104, 101, 108 108 111]-> unicode character set 
 * 010101
 * 2^x
 * 8^x
 * 10^x
 * 16^x 
 * encoding
 * 
 * 
 */
