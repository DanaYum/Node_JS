/***var use for Functin level scope
function exampleFunction()
{
    if(true)
    {
        var functionScopedVar=" I am function-scoped";
    }
    console.log(functionScopedVar);
}
exampleFunction();
console.log(functionScopedVar);**/
//***let and const use for block level scope
/*function exampleFunction()
{
    if(true)
    {
        let functionScopedVar=" I am block-scoped";
        console.log(functionScopedVar);
    }
    
}
exampleFunction();
*/
// ***redeclare a same variable is possible only in different scope ---shadowing
/*
var shadowdVar="I am global";
function exampleFunction()
{
    if(true)
    {
        let shadowdVar="I am local";
        console.log(shadowdVar);
    }
    
}
exampleFunction();
console.log(shadowdVar);*/
//***hoisting- allows to access the variable and function before it is declared...how hoisting happen with let
//hoisting also happen with let and const too
/*
console.log(x);//undefined because the declaration is hoisted
let x=5;
console.log(x);
*/
/*
let a='k'
console.log(typeof(a))

let person={
    name: "Alice", age: 30, isStudent: false
};
console.log(person.name);
*/
/*
function add(a,b)
{
    return a+b;
}
var a=add(3,4);
console.log(a);
*/
/*
function example()
{
	if(true)
	{
		let a="I am a block-level";
		console.log(a);
	}
}
example();
*/
hello();
function hello()
{
    console.log("hello world!");
}