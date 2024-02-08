const btn1El = document.querySelector(".btn1");
const bgEl = document.querySelector(".container");
const btn2El = document.querySelector(".btn2");
const tunImgEl = document.querySelector(".tun");
const kunImgEl = document.querySelector(".kun");


btn1El.addEventListener('click', () => {
    bgEl.style.backgroundColor = "black"
    kunImgEl.style.display = "none"
    tunImgEl.style.display = "block"
    btn1El.style.display = "none"
    btn2El.style.display = "block"
})

btn2El.addEventListener('click', () => {
    bgEl.style.backgroundColor = "white"
    kunImgEl.style.display = "block"
    tunImgEl.style.display = "none"
    btn1El.style.display = "block"
    btn2El.style.display = "none"
})