let a: null;
a = null; // valid
a = 'Hello'; // invalid


// Set a variable to be either null or a string
let b: null | string;
b = 'Hello';  // valid
b = null; // valid