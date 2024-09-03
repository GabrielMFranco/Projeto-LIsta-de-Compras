const addItem = document.querySelector("#additem")
const form = document.querySelector("form")

// pegar o valor do input quando aciona o submit
form.onsubmit = (event) => {
    event.preventDefault()
    // pega o número de DIVs para usar no id do input e do label.
    const elements = document.querySelector("#itens")
    let numberElements = elements.getElementsByTagName("div").length
    
    // Criando nova div e adicionando class
    const newItem = document.createElement("div")
    newItem.classList.add("produto")
    // Criando span com classe img e adicionando no item
    const newSpan = document.createElement("span")
    newSpan.classList.add("img")
    newItem.appendChild(newSpan)
    // Criando input checkbox 
    const newCheck = document.createElement("input")
    newCheck.type = "checkbox"
    newCheck.name = "produto"
    newCheck.id = "produto" + ++numberElements
    newItem.appendChild(newCheck)
    // Criando label e adicionando os atributos
    const newLabel = document.createElement("label")
    newLabel.setAttribute("for", 'produto'+ numberElements)
    newLabel.textContent = addItem.value
    newItem.appendChild(newLabel)
    // Adicionando o botão de apagar 
    const newButton = document.createElement("button")
    newItem.appendChild(newButton)
    // Adicionando a img nele
    const newImgBtn = document.createElement("img")
    newButton.appendChild(newImgBtn)
    newImgBtn.setAttribute("src", "assets/icon/trash.svg")
    
    
    const itens = document.querySelector("#itens")
    itens.appendChild(newItem);




}




// criar nova div com a classe produto
// adicionar o valor do input na div
