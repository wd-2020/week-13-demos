// Single-line comment
/*
  This is a multi-line comment.
  Running over multiple lines,
  of course.
*/

// Multi-line comments
// with the single-line marker
// in front of each line

// Values: numbers
5;
5.0; // still a number to JavaScript;
console.log(typeof 5.0); // outputs 'number'
console.log(typeof 5); // output 'number'

// Values: strings
'I am a single-quoted string';
"I am a double-quoted string";

// Values: booleans
true;
false;

// Complex values: Arrays
[1,2,3];
['Moe','Larry','Curly'];

// Complex values: Object literals
// { a: 1, b: 2 }
// { name: 'Hank', age: 6 };

// Variable assignment
var my_num = 5;
var my_string = 'string';
var my_boolean = true;
var my_array = [1,2,3];
var my_object = { a: 1, b: 2 };

// Comparison operators
console.log("Is 5 equal to my_num?", 5 === my_num); // output true
console.log("Is my_boolean true?", my_boolean === true); // output true
console.log("Is my_boolean not false?", my_boolean !== false); // output true
