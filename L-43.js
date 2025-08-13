function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is: ${this.score}`);
}
const chai = new createUser("bro", 13)
const tea = createUser("sis", 20)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


//PROTOTYPE

// let myName = "Harish"
// console.log(myName.truelength);


let myHeros = ["thor" , "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "spider-web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`); 
    }
}
Object.prototype.Harish = function() {
    console.log("Harish is present in all objects");
}

Array.prototype.heyHarish = function() {
    console.log("Harish says hello!");
}
//heroPower.Harish()
myHeros.Harish()
myHeros.heyHarish()
// heroPower.heyHarish() ---this won't have access to heyHarish() method


//inheritance
const User = {
    name: "Harsh",
    email: "harsh21@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false,
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  //old approach
}
Teacher.__proto__ = User  //old approach


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  
//By this, TeachingSupport will have access to the properties of Teacher.


let anotherUsername = "Coding         " 
String.prototype.trueLength = function() {
    console.log(`${this}`);
    //console.log(`${this.name}`);   ---not accessible
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"Bhairvi".trueLength()
"Cappuccino  ".trueLength()