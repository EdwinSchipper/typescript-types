// Choise
// enum Role {
//     Admin,
//     Editor,
//     Guest 
// }

// Choise Alias
type Role = 'admin' | 'editor' | 'guest' | 'reader';
type User = {
    name: string;
    age: number;
    role: Role;
    permissions: string[];
};

let userRole: Role = 'admin';


// ...


let userRole2: 'admin' | 'editor' | 'guest' = 'admin';
userRole2 = 'guest';


// ...


let possibleResult: [1|-3,    3|-6];
possibleResult = [1, -6];
possibleResult = [1, -6];