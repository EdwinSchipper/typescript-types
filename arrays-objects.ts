// Array Type assignment
let hobbies = ['Sports', 'Cooking'];
let hobbies_alt: string[] = ['Sports', 'Cooking'];
let users: string[];

hobbies.push(10);
hobbies_alt.push('Fishing');




// Union Type assignment
let users_alt: Array<string | number>;

users_alt = [1, 'Edwin']
users_alt = [1, 33]
users_alt = ['Admin', 'Edwin']
