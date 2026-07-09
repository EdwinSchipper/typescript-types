function generateError( msg?: string ) {  // ? means optional parameter
    throw new Error(msg);
}
 
generateError(); // Valid
generateError('Something went wrong!'); // Valid




type User = {
    name: string,
    age: number,
    role?: 'admin' | 'user' // ? means optional property
};