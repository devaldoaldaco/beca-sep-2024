255;
255.0;
255 === 255.0;
255 === 0xff;
255 === 0b11111111;
255 === 0.255e3;

Number("123");
Number("123") === 123;
Number("unicorn");
Number(undefined);

new Int32Array([1.1, 1.9, -1.1, -1.9]); [1, 1, -1, -1]
new Int8Array([257, -257]);

new Uint8Array([257, -257]);

const biggestNum = Number.MAX_VALUE;
const smallestNum=
Number .MIN_VALUE;
const infiniteNum = 
Number .POSITIVE_INFINITY;
const negInfiniteNum = 
Number .NEGATIVE_INFINITY;
const notAnum = Number.NaN;

const biggestInt = 
Number .MAX_SAFE_INTEGER;
const smallestInt =
Number .MIN_SAFE_INTEGER;

const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));

Number("123");
Number("123") === 123;
Number("12.3");
Number("12.00");
Number("123e-1");
Number("");
Number(null);
Number(0x11);
Number("0b11");
Number("0o11");
Number("foo");
Number("100a");
Number("-Infinity");
