/*
const delayedFunction =() => {
    console.log('Delayed function executed!');
};
setTimeout(delayedFunction,2000);//executes after two seconds
*/
/*
const repeatedFunction = () => {
    console.log('Repeated function executed!');
};
const intervalId=setInterval(repeatedFunction,1000);//execute every one second
*/
/*
function repeatedFunction()//Function to be executed at intervals
{
    console.log('Executing repeated function...');
}
//Set an interval (execute repeatedFunction every 1000 milliseconds)
const intervalId= setInterval(repeatedFunction,1000);
//after some time (e.g, 5000 milliseconds),stop the interval
setTimeout(() =>
{
    clearInterval(intervalId);//stop the interval
    console.log('Interval stopped.');
});
*/
/* Synchronous callback function....
function parentFunction(name,callback){
    callback();
    console.log("Hey "+name);
}
function randomFunction()
{
    console.log("Hey..! I am callbackFunction");
}
parentFunction("Random String",randomFunction);
*/
/*
Asynchronous callback function
function parentFunction(name,callback){
    setTimeout(callback,1000);
    console.log("Hey "+name);
}
function randomFunction()
{
    console.log("Hey..! I am callbackFunction");
}
parentFunction("Random String",randomFunction);
*/ 
// same code with anonymous
function parentFunction(name,callback){
    setTimeout(callback,1000);
    console.log("Hey "+name);
}
parentFunction("Random String",function(){
    console.log("Hey I am a callback Function");
});
