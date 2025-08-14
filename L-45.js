//ES6(ECMA Script--a major update to Javascript)
// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// } 
// const tea = new User("tea", "tea@google.com", "123")
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());


//behind the scene
// function User(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     User.prototype.encryptPassword = function() {
//         return `${this.password}abc`
//     }
//     User.prototype.changeUsername = function(){
//         return `${this.username.toUpperCase()}`
//     }
// const coffee = new User("tea", "tea@google.com", "123")
// console.log(coffee.encryptPassword());
// console.log(coffee.changeUsername()); 


// class User{
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`Username is ${this.username}`);
//     }
// }
// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)  //used to access parent constructor
//         this.email = email
//         this.password = password 
//     }
//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }
// const tea = new Teacher("Abhimanyu", "abhimanya@google.com", "789")
// tea.addCourse()
// tea.logMe()
// const masalaTea = new User("Manav")
// masalaTea.logMe()
// console.log(tea instanceof User)


class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){  // "static" does not let you use createId() method
        return `133`
    }
} 
const work = new User("Heer")
//console.log(work.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("IPHONE","i@apple.com")
iphone.logMe()