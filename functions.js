// function sum(a,b){
//     //console.log(a+b)
//     return a+b
// }
// result=sum(3,5)
// console.log("The sum of the two numbers is: " + result)

//---Arrow function and this---
// const user={
//     username:"Sameer",
//     price: 222,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to the website!!`);
//         console.log(this);
//     }
// }
// // user.welcomeMessage() 
// // user.username="Sunny"
// // user.welcomeMessage()
// console.log(this); 

// function chai() {
//     let username="Rohit"
//     console.log(this);
// }

// const chai = function () {
//     let username="Rohan"
//     console.log(this.username);
// }
// chai()

//---Arrow Function---
// const chai = () => {
//     let username="Rohan"
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,6));

//---Arrow function also known as implicit return---
// const addTwo = (num1, num2) => (num1+num2)
// console.log(addTwo(2,6));

//---Rest operator---
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,600));

// function calculateCartPrice(val1,val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,600,500));

// const user = {
//     username: "Anshi",
//     work: "SDE"
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and work is ${anyobject.work}`);
// }
// handleObject(user)
// handleObject({
//     username: "Kriti",
//     work: "Data Analyst"
// })

// const newArray=[200,60,69,400]
// function returnSecondValue(getArray){
//     return getArray[2]
// }
// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([200,300,400,500]));

//---Global and Local Scope---
//var c=300
// let a=100
// if(true) {
//     let a=10
//     const b=20
//     var c=30
// }
// console.log(a);
//console.log(b);
//console.log(c);

// function one() {
//     const username="hitesh"

// function two() {
//     const website="youtube"
//     console.log(username);
// }
//console.log(website);
// two()
// }
// one()

// if(true){
//     const username="rohan"
//     if(username=="rohan"){
//         const website="youtube"
//         console.log(username + " "+website);
//     }
    //console.log(website);
//}
//console.log(username);

// console.log(addOne(3))
// function addOne(num){
//     return num+1
// }
// console.log(addTwo(4))
// const addTwo= function(num){
//     return num+2
// }

//L-24 (IIFE)
// (function chai() {      //unnamed IIFE
//     console.log(`DB CONNECTED`);
// }) ();
// ( () => {
//     console.log(`DB CONNECTED TWO`);
// }) ();

// (function chai() {       //named IIFE
//     console.log(`DB CONNECTED`);
// }) ();
// ( (name) => {       
//     console.log(`DB CONNECTED TWO ${name}` );
// }) ('Rahul');

//L-25 Javascript Execution Context
//DONE

//L-26 
// if(2==="2"){
//     console.log("Executed");
// }

// const month=3
// switch(month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("Default case matched!")
// }

//Nullish Coalescing Operator (??)
//let val1;
//val1= 5??10
// val1=undefined ?? 10 ?? 40;
// console.log(val1);

//L-29 For of loop
const arr=[1,2,3,4,5]
for( const num of arr) {
    //console.log(num);
}

const greetings= "Hello to everyone!"
for(const greet of greetings){
    //console.log(`Each character is : ${greet}`);
}

const map=new Map()
map.set('IN',"India")
map.set('IT',"Italy")
map.set('FR',"France")
map.set('IN',"India")
//console.log(map);

for (const [key,value] of map) {
    //console.log(key+":-"+value);
}

//For In loop
const myObject={
    js:'javascript', 
    cpp:'c++',
    rb:'ruby',
    sf:'swift'
}
for (const key in myObject){
    //console.log(`${key} is a shortcut for ${myObject[key]}`);
}

const programming=["js", "cpp", "rb","sf"]
for(const key in programming) {
    // console.log(programming[key]);
}

//For each loop
const coding=["js", "cpp", "rb","sf"]
coding.forEach(function (item) {
    //console.log(item);
})

coding.forEach( (item) => {
    //console.log(item);
})

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]
myCoding.forEach((item)=>{
    //console.log(item.languageName);
})
