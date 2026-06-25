let age: any = 36;
let age_alt: string | number = 36; // Union type

 
// ...

age = 36; // OK
age = '37'; // OK
age = false; // OK
age = {} // OK
age = []; // OK