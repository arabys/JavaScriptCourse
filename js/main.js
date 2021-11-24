let happy = false;
let sad = true;

// console.log(happy);
// console.log(typeof happy)
// console.log(sad && happy);
// console.log(!sad);
// console.log(!!sad);



let a = null;
// console.log(typeof a); // output object
 let b;
// console.log(b); 

//GC Garbage Collection

//creat function that no arguments
function sayHi(){
    console.log("Hi")
    console.log("Bye")
}
// sayHi()

//create function that with arguments
function saySum(a, b){
    console.log(a + b)
}
saySum(2,5)
let x = 6;
let y = 3;
// saySum(x,y)
// saySum() // output NaN


function sayHello(name) {
    return "Hello " + name
    console.log("This will never run")
}

let result = sayHello("Sahar")
// console.log(result)

// function printVariable(variable) {
//     console.lot(variable)
// }

// console.log(printVariable) //All Text Of Function

// function func(x) {
//     x("Hello World")
// }

// func(printVariable)
// printVariable


// function sumCallback(a , b , callback) {
//     callback(a + b)
// }
// function handelSum(sum) {
//     console.log(sum)
// }
// sumCallback(1,2,handelSum)


// function sumResult (a , b , callback){
//     callback(a * b)
// }
//  function logFunc(sum){
//     console.log(sum)
//  }

// sumResult(4 ,3 ,logFunc);


// function printVariable (variable) {
//     console.log(variable)
// }


// function printVariable(variable) {
//     console.log(variable)
// }


// function printName(name , callback) {
//     callback("Hello " + name)
// }

// printName("Sahar" , printVariable)


// printName("Samira" , function (variable){
//     console.log(variable)
// })

// function sum(a, b){
//     return a + b;
// }
// console.log(sum(2,6));

// let sumArrow = (a ,b) => {
//     return a + b;
// }
// console.log(sumArrow(1 , 2))

// function sum(a , b) {
//     return a + b
// }

// let sumArrow = (a , b) => a+ b
// console.log(sumArrow(1,2))


// function printName (name) {
//     return name;
// }

// // console.log(printName("Sahar"));

// let printNameArrow = name => "Hello " + name

// function doStuff (a, b, name){
//     print (sum(a,b))
//     print(sayHi(name))
// }

// function sayHi(name){

//     return "Hi " + name
// }
// function print(variable){
//     console.log(variable)
// }

// function sum(a, b) {
//     return a + b
// }

// doStuff(10,2,"Sahar")

