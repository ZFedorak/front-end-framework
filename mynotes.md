Modules can have only one default export
    Module can have unlimited exports

 
//import sayHello from "./sayHello";
//import { sayGoodbye } from "./sayHello";


    {
        name = 'Zack' (Key = value pair)
    }

    const person ={
        name : 'Zack'
    }

const Zack ={
    age:24,
    hair: true
}
const newObj = Zack;

newObj.age = 88

console.log(Zack, newObj)

const newObj = Object.assign({},Zack)
newObj.age = 25
console.log(Zack, newObj) // never make it the orginal data . make  a copy of the object.

const newObj = {...Zack}
newObj.age = 26
console.log(Zack, newObj) // quicker way of doing the same as above. 

const copy = [...data]

copy[0] = 100

console.log(copy, data) // example of creating a copy of an array inorder to change a value in the copied array.

const data = [1,2,3,4,5]

const [a,b,c] = [... data]
console.log(a,b,c)

Promises 
Asyn Programming

req for data ------- request
return data ------ response

mimic setTimeout(()=>{}, delay) 


Function below will be used to show promises
function asyncTask (){
    setTimeout(()=>{
        console.log("task over")
    }, 1500)
}

asyncTask()
// this example shows that it wont return data in ther setTime out because its not the anyc function.
function asyncTask (){
    let data = "data"
    setTimeout(()=>{
        data = 12
        return data
    }, 1500)
    return data
}

console.log(asyncTask())
function asyncTask (){
// firebase returns promises
// grab data from database
// data success reslove
// an then there is error reject
// num represents a task 
const num = Math.random()*10
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(num > 5){
                resolve("you got data")
           }else{
                reject("error")
           }
        }, 1500)
    })


}
let store = [] // globe array


asyncTask()
.then(TheData => {
  
    console.log(TheData)
    // configUI
})
.catch(error=> console.log(error))*/

/*import { dataFetcher } from "./utils/dataFetcher";

async function appinit(){
   const data = await dataFetcher('https://jsonplaceholder.typicode.com/todos/')
// instead of using .then you can use await
console.log(data)
}

appinit()*/