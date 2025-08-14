const tea = {
    name: 'ginger tea',
    price: 250,
    isAvailable: true,

    orderTea: function(){
        console.log("Tea not ready!")
    }
}
console.log(Object.getOwnPropertyDescriptor(tea,"name"))

// Object.defineProperty(tea, 'name',{
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(tea, 'name'))

for (const [key,value] of Object.entries(tea)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}