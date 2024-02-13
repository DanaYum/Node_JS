/* Asynchronous
function parentFunction(name,callback)
{
    setTimeout(callback,2000);
    console.log("hey"+name);
}
parentFunction("hello yumnam ",function(){
    console.log("hey this is Asynchronous call back function");
});
*/
//Synchronous
let parentFunction=(name,callback)=>
{
    callback();
    console.log("hey "+name);
}
parentFunction(" Yumnam ",function()
{
    console.log("This is Synchronous callback function");
});


