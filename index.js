console.log("Hello world");
let navn = ("Byff")
console.log(navn)


let person = {
name: "Tommy",
age: 36
}
console.log(person)

let selectedColors = ["red", "blue"]
console.log (selectedColors[0]);

function greet(){
console.log("Hello world")
}

greet();

function square(number){
    return number * number;

}

console.log(square(2));

let highIncome = false;
let goodCreditScore = false;

let eligableForLoan = highIncome || goodCreditScore;

console.log("eligable",eligableForLoan)

let applicantRefused = !eligableForLoan;
console.log("Applicatiion refused" ,applicantRefused)

//If else
let hour = 20

if (hour >= 6 && hour <12 ) {
console.log ("Good morning")
}

else if(hour >= 12 && hour< 18 ){
console.log("Good afternoon")
}
else
console.log("Good evening")

//swich case
let role = "moderator"

switch(role){
    case "guest":
        console.log("Guest user");
        break;

        case "moderator":
            console.log("Moderator");
            break;

            default:
                console.log("unknown user");
}


 //for loops
 for (let i=0; i<10; i++){
    console.log("Hello Litle devil") 
}

 //While loop
 /*     let i = 0
while (1<=5){
    if(i % 2 !==0)
    i++;  
    console.log(i) 
}    */

// Do while loop
/* let i = 9;
do{
    if(1 % 2 !== 0) console.log(i)
    i++

}
while (1<5) */

// For in loop
const Person = {
    name: "Tommy" ,
    age: 36
};
for(let key in person)
console.log(key, person[key]);

//for of loop
const colors = ["blue", "pink","yellow" ]
for(let color of colors)
console.log (color)

// break and continue loops
let r = 0;
while (r<=10){
    if(r===5) break;
    console.log(r);
    r++;
}

// Object oriented programming basics (Husk komma ,,,)

 const circle  = {
    radius: 1,
    lokasjon: {
        x: 1,
        y: 2
    },
    isvisible: true,
    draw: function(){
        console.log("draw")
    }
} 
 circle.draw() 

// factory functions

function createCircle(radius,){

return{
    radius,
    draw(){
        console.log("draw")
    }
}

}
    
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//Constructor functions

// Camel notation = oneTwoThreeFour
// Pascal notation = OneTwoThreeFour
// Bruk Pascal notation på constructor functions

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
console.log("draw")
    }
}
const another = new Circle(1)

// Dynamic nature of objects

const Tommy ={
    age: 36,
    height: 178,
}

// Legg til objektet
Tommy.color = "white";
Tommy.draw = function(){
}
console.log(Tommy)

// Fjern objekter
delete Tommy.color;
delete Tommy.draw;
console.log(Tommy)

// Cloning an object

const circle3 = {
    radius:1,
    draw(){
        console.log("Draw")
    }
}
// en måte å kopiere (Gammel)

 const annen ={};
    for (let key in circle3)
    annen [key] = circle3[key];
    console.log(annen) 

// En annen måte å kopiere objekter på (ny)

const anether = Object.assign({}, circle3 )
console.log(anether)
    
// Enda en måte å kopiere

const anether2 = {...circle3};
console.log(anether2)

//Math object mange innebygde, google it! Her er et eksempel

function getRandom(){
    return Math.random()
}

// Forskjellige måter å skrive på

//String literal
const heiJohn = "Hei John hvordan går det? Mitt navn er \"mygg\" \n Jeg vil møte deg klokken 14:00" 
console.log(heiJohn)

//Template literal
const heiJohn2 = `Hei John hvordan går det? Mitt navn er "mygg
Jeg vil møte deg klokken 14:00`
console.log(heiJohn2)

//Date object
const now = new Date()
const date1 = new Date("May 11 2018 09:00")
const date2 = new Date(2018, 4, 11, 9)

now.setFullYear(2017)


// Arrays 

// Adding elements
const numbers = [3,4];
// add elements to end of array
numbers.push(5,6)
console.log(numbers)
// add elements to beginning of array
numbers.unshift(1,2)
console.log(numbers)
// add elements to the middle
numbers.splice(2,0,"a","b")
console.log(numbers)


// Finding elements (Primitives)
const numbers2 = [1,2,3,4,1,2,3]

console.log(numbers2.indexOf("a"))
console.log(numbers2.lastIndexOf(1))
console.log(numbers2.includes(1))

// Finding elements referance types
const courses = [
    {id: 1, tag: "kalv"},
    {id: 2, tag: "mygg"},
]

const course = courses.find(function(course){
    return course.name === 1
});
console.log(course)


// Removing elements
let numbers3 = [1,2,3,4,5];
// remove elements at the end of array
const last = numbers3.pop();
console.log(numbers3)
// remove elements at the beginning of array
const first = numbers3.shift();
console.log(numbers3)
// remove elements from the midle of array
numbers3.splice(2,1)
console.log(numbers3)


// Emptying array

// Solution 1
numbers3 = [];
console.log(numbers3)

//solution 2
numbers3.length = 0;
console.log (numbers3)

// solution 3
numbers3.splice(0, numbers3.length)
console.log(numbers3)

// solution 4
while (numbers3.length > 0)
numbers3.pop();
console.log(numbers3)


// Combining and slicing arrays

const first1 = [1,2,3]
const second = [4,5,6]

const combined = first1.concat(second)
console.log(combined)

const slice = combined.slice(2)
console.log(slice)

// Spread operator
const first2 = [1,2,3,4]
const second2 = [5,6,7,8]

const combined2 = [...first2, ...second2];
console.log(combined2)

// joining array
const numbers4 = [1,2,3]
const joined = numbers4.join(",")
console.log(joined)

// Sorting array
const numbers5 = [1,2,3,5,8,7,9]
numbers5.sort();
console.log(numbers5)

numbers5.reverse();
console.log(numbers5)

const courses2 = [
    {id: 1, name2: "Node.js"},
    {id: 2, name2: "Javascript"},
]
courses2.sort (function(a,b){
if (a.name < b.name) return -1
else if (a.name > b.name) return 1
return 0
});
console.log(courses2)


// Filter an array
const numbers6 = [1,2,3,9,7,-7,-9,-4]

const filteredNumbers = numbers6.filter(function(value){
return value >=0
})
console.log(filteredNumbers)

// Reducing array
const numbers7 = [1,-1,2,3,4]

let sum = 0;
for(let n of numbers7)
sum += n;

console.log(sum)


// Functions

//Function decleration
function walk(){
    console.log("walk")
}

//Function expression
let run = function(){
console.log("run")
};

run();
walk();

//Default parameters
function interest (principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years

}

console.log(interest(10000,undefined, 5))


