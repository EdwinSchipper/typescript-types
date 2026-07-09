// The return type (:number)
function addThis(a:number, b:number): number {
    return a + b;
}

// The function returns nothing (:void)
function log(message: string): void {
    console.log(message);
}

// The return type (:never) because the function never returns a value
function logAndThros(errorMessage: string): never {
    console.log(errorMessage); 
    throw new Error(errorMessage);
}

// Arrow function with return type
const logMsg = (message: string) => {
    console.log(message);
};

// Define a function type in Typescript
function performJob(CallBack: (msg: string) => void) {
    //..
    CallBack('Job is done');
}

// Call functiuon
performJob(log);





// Create User Object
type User2 = {
    name: string;
    age: number;
    greet: () => string;
};

// Create a profile object with the User2 type
let profile: User2 = { 
    name: 'Edwin',
    age: 42,
    greet() {
        console.log('Hello there!');
        return this.name;
    }
}

profile.greet();