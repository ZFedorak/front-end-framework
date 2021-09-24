const userTemplate = function({id, name, phone, website}){
    const template = `
    <ul>
        <li>id ${id}</li>
        <li>name ${name}</li>
        <li>phone ${phone}</li>
        <li>website ${website}</li>
    </ul>
    `


    return template
}

export {userTemplate}