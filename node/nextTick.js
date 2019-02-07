console.log('hi! ');
process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now 1'));
setImmediate(() => console.log('Now 2'));
setImmediate(() => console.log('Now 3'));
console.log('world');