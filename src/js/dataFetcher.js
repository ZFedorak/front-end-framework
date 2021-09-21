const dataFetcher = function (url=null){
    // this understood
    // check the url value !null
    // get request to the url get something http verbs
    fetch(url)
    .then(res=> res.json())
    .then(data=> console.log(data))

    return null
}
export {dataFetcher}
/*
const dataFetchers = ()=>{
    //limited to none
    // explicit return
}
function jim(){
    // named function 
}

const temp = () => 12*/