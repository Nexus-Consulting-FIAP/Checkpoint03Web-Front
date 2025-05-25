const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")
const img6 = document.getElementById("img6")
const modal = document.getElementById("fs")
const imgfs = document.getElementById("imgfs")
const btn_exit = document.getElementById("btn-exit")

function formatPhotoSrc(x) {
    return x.src.substring(x.src.indexOf("/src"))
}

function toggleModal(img){
    modal.classList.toggle("hidden")
    imgfs.src = formatPhotoSrc(img)
}

img1.addEventListener("click", () => {toggleModal(img1)})
img2.addEventListener("click", () => {toggleModal(img2)})
img3.addEventListener("click", () => {toggleModal(img3)})
img4.addEventListener("click", () => {toggleModal(img4)})
img5.addEventListener("click", () => {toggleModal(img5)})
img6.addEventListener("click", () => {toggleModal(img6)})
btn_exit.addEventListener("click", () => {toggleModal("")})

//modal

