/*
    Component
    Form of Templating
    makeElement role is to convert template string to an element node
*/
const makeElement = function(htmlTemplateString=``){
    const docFrag = document.createRange().createContextualFragment(htmlTemplateString)
    const elem = docFrag.children[0]
    return elem
}
export default makeElement

