// Primitives: number, string, boolean
// More complex types: array, object
// Function types, parameters

// Primitives

let age: number = 24;

let userName: string = 'Sofichi';

let isInstructor: boolean = false;



// More complex types

let hobbies: string[] = ['Sports', 'Cooking'];

// let person: {
//     name: string, 
//     age: number
// };

// person = {
//     name: 'Sofi',
//     age: 30
// };


// let people:  {
//     name: string, 
//     age: number
// }[];

// people = [
//     {
//         name: 'John',
//         age: 34
//     },
//     {
//         name: 'Paul',
//         age: 34
//     },

// ];




// Type inference

// let course = 'React - The Complete Guide';

// course = 12345;




// Union types

let course: string | number = 'React - The Complete Guide';

course = 12345





// Type Aliases

type Person =  {
    name: string, 
    age: number
};

let person: Person;

person = {
    name: 'Sofi',
    age:30
}

let people: Person[];



// Functions & types

//the retun type in this case is going to be number for inference
function addNumber(a: number, b: number) {
    return a + b;
}

//void type for functions
function printOutput(value: any) {
    console.log(value);
}

