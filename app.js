// Learning basics of Javascript: Dynamically Typed Language

// Variables: var, let, const
// var = old method of initializing a variable
// let = variable can be reassigned; data can be changed
// const = variable name cannot be reassigned; data can be changed

var firstName = "Moudi";
let lastName = "Kawi";
const dateOfBirth = 17091996;

// Primitive Data Types: strings, numbers, booleans, symbols, null, undefined

var string = "string";
var number = 20;
var booleanTrue = true;
var booleanFalse = false;
var symbols = Symbol();
var thisNull = null;
var undefined;

// Reference Data Types: arrays, object, functions, dates, etc.

var array = []; // an Array is a set of values
var object = {}; // a Object is a group of name-value pairs
var functions;
var dates = new Date();
var etc;

// Converting Data types

// Number to String
val = 100;
val = String(100);
val = (100).toString();

// String to Number
val = "100";
val = Number("100");
val = parseInt("100"); // rounds up to the nearest integer
val = parseFloat("100"); // does not round up

// Javascript Notes For Professionals

// SVG Text
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 100;
svg.height = 50;
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';
text.textContent = 'Hello world!';
svg.appendChild(text);
document.body.appendChild(svg);

// Canvas Image -> Text
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;
var ctx = canvas.getContext('2d');
ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);
document.body.appendChild(canvas);

// NaN - Not a Number Function WITH conversion
isNaN(NaN); // true
isNaN(1); // false: 1 is a number
isNaN(-2e-4); // false: -2e-4 is a number (-0.0002) in scientific notation
isNaN(Infinity); // false: Infinity is a number
isNaN(true); // false: converted to 1, which is a number
isNaN(false); // false: converted to 0, which is a number
isNaN(null); // false: converted to 0, which is a number
isNaN(""); // false: converted to 0, which is a number
isNaN(" "); // false: converted to 0, which is a number
isNaN("45.3"); // false: string representing a number, converted to 45.3
isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3
isNaN("Infinity"); // false: string representing a number, converted to Infinity
isNaN(new Date); // false: Date object, converted to milliseconds since epoch
isNaN("10$"); // true : conversion fails, the dollar sign is not a digit
isNaN("hello"); // true : conversion fails, no digits at all
isNaN(undefined); // true : converted to NaN
isNaN(); // true : converted to NaN (implicitly undefined)
isNaN(function(){}); // true : conversion fails
isNaN({}); // true : conversion fails
isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number

// Number.isNaN - Not a Number Function WITHOUT conversion
// The one and only
Number.isNaN(NaN); // true
// Numbers
Number.isNaN(1); // false
Number.isNaN(-2e-4); // false
Number.isNaN(Infinity); // false
// Values not of type number
Number.isNaN(true); // false
Number.isNaN(false); // false
Number.isNaN(null); // false
Number.isNaN(""); // false
Number.isNaN(" "); // false
Number.isNaN("45.3"); // false
Number.isNaN("1.2e3"); // false
Number.isNaN("Infinity"); // false
Number.isNaN(new Date); // false
Number.isNaN("10$"); // false
Number.isNaN("hello"); // false
Number.isNaN(undefined); // false
Number.isNaN(); // false
Number.isNaN(function(){}); // false
Number.isNaN({}); // false
Number.isNaN([]); // false
Number.isNaN([1]); // false
Number.isNaN([1, 2]); // false
Number.isNaN([true]); // false