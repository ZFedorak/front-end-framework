

import { dataFetcher } from "./utils/dataFetcher";

async function appinit(){
   const data = await dataFetcher('https://jsonplaceholder.typicode.com/todos/')
// instead of using .then you can use await
console.log(data)
}

appinit()