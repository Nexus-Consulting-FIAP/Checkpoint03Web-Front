const spantxt = document.getElementById("span-text")
const textreference = spantxt.textContent
spantxt.textContent = ""
let velocidade_ms = 120

let changeText = setInterval(addText, velocidade_ms)

let index_cg = 0
function addText() {
    spantxt.textContent = spantxt.textContent + textreference[index_cg]
    index_cg++
    if (index_cg == textreference.length){
        clearInterval(changeText)
        changeText = setInterval(removeText, velocidade_ms)
    }
}

let index_removetext = 0
function removeText(){
    newtext = ""
    for(let i = 0; i<textreference.length - index_removetext - 1; i++){
        newtext = newtext + textreference[i]

    }
    spantxt.textContent = newtext
    index_removetext++
    index_cg--
    if (index_cg == -1){
        clearInterval(changeText)
        index_cg = 0
        index_removetext = 0
        spantxt.textContent = ""
        changeText = setInterval(addText, velocidade_ms)

    }
}

