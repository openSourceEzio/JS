const pi = 3.14;
// pi = 3.14159; // TypeError: Assignment to constant variable.
const obj = { name: 'Bob' };
obj.name = 'Alice'; // This is allowed
console.log(obj.name); // Outputs: 'Alice'
