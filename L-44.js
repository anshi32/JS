function SetUsername(username){
    //Complex DB calls
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    SetUsername.call(this, username) //this "this" refers to upar wala this
    this.email = email
    this.password = password
}
const chai = new createUser("tea","tea@microsoft.com", "121")
console.log(chai)