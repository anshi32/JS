class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    //getter and setter methods saath mei hi aayenge
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){  //getter method
        return this._password.toUpperCase()
        //return `${this._password}h`
    }
    set password(value){  //setter method
        this._password = value.toUpperCase()  //we never return in setter
    }
}
const h = new User("h@google.com", "123")
console.log(h.email);