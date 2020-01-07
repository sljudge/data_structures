/*
    Type	            Each element size in bytes
    -----------------------------------------------
    Int8Array	                1
    Uint8Array	                1
    Uint8ClampedArray	        1
    Int16Array	                2
    Uint16Array	                2
    Int32Array	                4
    Uint32Array	                4
    Float32Array	            4
    Float64Array	            8
*/

///////////
//EXAMPLE//
///////////
var i8 = new Int16Array(3);
console.log(i8); // Returns [0, 0, 0]

// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]

///////////////////////////////////////////////////////////

/*
First create a buffer that is 64-bytes. Then create a Int32Array typed array with a view of it called i32View.
*/
const myByteSize = 64
const myBuffer = new ArrayBuffer(myByteSize);
let i32View = new Int32Array(myBuffer)
console.log(i32View)
console.log(i32View.byteLength)