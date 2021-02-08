/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
let a = () => 'Welcome to Appleseeds Bootcamp!';
let b = () => {
  return 'Welcome to Appleseeds Bootcamp!';
};

let c =a=> Math.pow(a, 2);
let d=(a)=>{
    return Math.pow(a, 2)
}
// From function expressions to IIFE functions.
((a)=> Math.sqrt(a))(16);


((a,b)=>Math.random() * (a - b) + b)(2,1)