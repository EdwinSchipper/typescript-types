// Array Type assignment
let hobbies = ['Sports', 'Cooking'];
let hobbies_alt: string[] = ['Sports', 'Cooking'];
let users: string[];

hobbies.push(10); // invalid
hobbies_alt.push('Fishing'); // valid




// Union Type assignment
let users_alt: Array<string | number>;

users_alt = [1, 'Edwin']
users_alt = [1, 33]
users_alt = ['Admin', 'Edwin']




// Tuple Type assignment
let possibleResults: [number, number];

possibleResults = [1, 2];
possibleResults = [1, 2, 3]; // Error: Type '[number, number, number]' is not assignable to type '[number, number]'.




// Objects
let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Edwin',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'Admin',
        id: 1
    }
};

// Any non null or undefined value can be assigned to a variable of type {}. 
// This includes primitive values, objects, arrays, and functions. However, null and undefined are not assignable to type {}.
let val: {} = 'Some text';
let val2: {} = 123;
let val3: {} = true;

let val4: {} = any; // wrong
let val5: {} = undefined; // wrong


// Record (means object) Type assignment
let data: Record<string, string | number>;

data = {}
data = {
    entry1: 1,
    entry2: 'Some string'
}
