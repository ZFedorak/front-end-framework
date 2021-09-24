/*
   Single Page app
   es modules - breaking up our files into seperate js files 

   Load Data Model
   user Model ={
      id:String
      name:string
      
   }

*/
import { userTemplate } from "./templates/UserTemplate";
import { dataFetcher } from "./utils/dataFetcher";
import makeElement from "./utils/makeElement"
import { render } from "./utils/render";
const appInit = async function(){
   // loading data 
   const data = await dataFetcher('https://jsonplaceholder.typicode.com/todos/')
// instead of using .then you can use await
// were adding the data to the view 
const templateLiteral = userTemplate(data)
//converting thetmeplate to an element 
// later we will need to add intereactivity
const elem = makeElement(templateLiteral)
// setting the view into the DOM
render(elem, document.querySelector('#app'))
}
// call the app init func
// 1. set the intial view
// html pages
// js apps template as the markup view UI
// external data fetch 
// combine the data and the view 
appInit()

