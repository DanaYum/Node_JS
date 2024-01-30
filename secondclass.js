/*
for(let i=0;i<5;i++)
{
    console.log(i);
}
*//*
let count=0;
while(count<5)
{
    console.log(count);
    count++;
}
*//*
let count=0;
do
{
    console.log(count);
    count++;
}while (count<5);
*/
//for ... in loop
/*
let person={name:"John",age: 34,occupation:"Developer"};
for(let key in person)
{
    console.log(key + ": " + person[key]);
}
*//*
let car={
    make:"Toyota",
    model:"Supra",
    year:2001,
    isElectric: false,
    start: function()
    {
        console.log("Engine started!");
    }
};
console.log(car.make);
console.log(car.year);
//calling a method
car.start();
*//*
//object constructor function
function Book(title,author,year)
{
    this.title=title;
    this.author=author;
    this.year=year;
}
//creating instances of the object
let book1=new Book("The Catcher in the Rye","J.D Salinger",1952);
let book2=new Book("To kill a mockingbird","Harper Lee",1960);
console.log(book1.title);
console.log(book2.author);
console.log(book2.year);
*//*
//working with array
let fruits=["apple","banana","orange","grape"];
console.log(fruits[0]);
console.log(fruits[3]);
//adding elements to the end
fruits.push("kiwi");
console.log(fruits);
//adding elements to the beginning
fruits.unshift("mango");
console.log(fruits);
//removing the last element
let removedLast=fruits.pop();
//removing the first element
let removedFirst=fruits.shift();
console.log(fruits);
//finding index of an element
let indexOfOrange=fruits.indexOf("orange");
console.log(indexOfOrange);
//iterating using a for loop
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
//slicing an array
let citrus=fruits.slice(1,3);
console.log(citrus);
//splicing an array(modifying original array)
let removed=fruits.splice(1,2,"pear","melon");
//concatenating arrays
let moreFruits=["grapefruit","pineapple"];
let allFruits=fruits.concat(moreFruits);
console.log(allFruits);
*//*
//Function expression
const multiply=function(a,b)
{
    return a*b;
};
//Invocation
const product=multiply(4,6);
console.log('Function Expression - Product:',product); 
*//*
//arrow function
const subtract=(a,b)=> a-b;
//Invocation
const difference = subtract(8,3);
console.log('Arrow Function - Difference: ',difference);
*/
try{
    //code that may throw an error
    throw new Error("An error");
} catch(error){
    //Code to handle the error
    console.error(error.message);
} finally{
    //Code that will run regardless of whether there was an error
    console.log("Cleanup code");
}