// ! typescript operator: Says this method could in theory return null, dangerous.
// const inputEl = document.getElementById('user-name')!;


// AS: Cast or Convert a type to another type
const inputEl = document.getElementById('user-name') as HTMLInputElement | null;

// if (!inputEl) {
// throw new Error('Element not found');
// }

console.log(inputEl.value); 

// ? operator: Try the value property when its not null
console.log(inputEl?.value); 