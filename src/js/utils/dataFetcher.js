
const dataFetcher = async function (url=null) {
//this understood 
//check the url value !null
// throw an error
// get request to the url get something http verbs

const res = await fetch(url)
const data = await res.json()
//.then(res=> res.json())
//.then(data=> data)

return data
}

export {dataFetcher}

/*
const dataFetchers = () => {
explict return
this is limited to none
return 1
}

function zack(){
named function
}

immidiatly returned
const temp ()=> <div>12</div>

*/