//L-30
const coding1=["js", "cpp", "rb","sf"]
const values1=coding1.forEach( (item) => {
    //console.log(item);
    return item
})
//console.log(values1);

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter( (num) => {
//     return num>5
// })

const newNums=[]
myNums.forEach( (num) => {
    if(num>4) {
        newNums.push(num)
    }
})
//console.log(newNums);

const myNumers=[1,2,3,4,5,6,7,8,9,10]
//const myNums1=myNumers.map( (num) => num+10)
const myNums1= myNumers.map( (num) => num*10)
                       .map( (num) => num+1)
                       .filter( (num) => num>=41)
//console.log(myNums1);

const Nums=[1,2,3]
// const myTotal= Nums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)
// console.log(myTotal);

const myTotal=Nums.reduce( (acc,curr) => acc+curr, 0)
//console.log(myTotal);

const shoppingCart= [
    {
        itemName: "dsa course",
        price: 3999
    },
    {
        itemName: "py course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 8999
    },
    {
        itemName: "cpp course",
        price: 2999
    }
]
// const billToPay=shoppingCart.reduce( (acc,item) => acc+item.price, 0)
// console.log(billToPay);