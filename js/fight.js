const btn = document.getElementById("btn")
const characters = document.getElementById("characters")
const loading = document.getElementById("loading")
const attributes = document.querySelector(".attributes")
const text = document.querySelector(".text")
const btn_r = document.getElementById("btn_r")

// atributos
let forca_p1 = document.getElementById("forca_p1")
let forca_p2 = document.getElementById("forca_p2")
let inte_p1 = document.getElementById("inte_p1")
let inte_p2 = document.getElementById("inte_p2")
let agi_p1 = document.getElementById("agi_p1")
let agi_p2 = document.getElementById("agi_p2")
let mp_p1 = document.getElementById("mp_p1")
let mp_p2 = document.getElementById("mp_p2")

// personagens
let p1;
let p2;

document.addEventListener("DOMContentLoaded", ()=>{
    const players = JSON.parse(localStorage.getItem("players"));

    if(players && players.length === 2){
        p1 = players[0]
        p2 = players[1]

    // att images
    document.getElementById("img1").src = p1.profile
    document.getElementById("img2").src = p2.profile

    // att names
    document.getElementById("name1").innerHTML = p1.nome
    document.getElementById("name2").innerHTML = p2.nome
    }

})
btn_r.addEventListener("click", ()=>{
    window.location.href = "index.html"
})

btn.addEventListener("click",() => {
    characters.style.display = "none"

    btn.style.display = "none"

    loading.style.display = "flex"

    setTimeout(() => {
        characters.style.display = "flex"

        btn.style.display = "none"
        btn_r.style.display = "flex"

        loading.style.display = "none"

        attributes.style.display = "flex"

        // força
        forca_p1.innerHTML = p1.força
        forca_p2.innerHTML = p2.força

        // inteligencia
        inte_p1.innerHTML = p1.inteligencia
        inte_p2.innerHTML = p2.inteligencia

        // agilidade
        agi_p1.innerHTML = p1.agilidade
        agi_p2.innerHTML = p2.agilidade

        // mp
        mp_p1.innerHTML = p1.mp
        mp_p2.innerHTML = p2.mp

        const total1 = p1.força + p1.inteligencia + p1.agilidade + p1.mp;
        const total2 = p2.força + p2.inteligencia + p2.agilidade + p2.mp;

        text.style.display = "block"

        if(total1 > total2){
            text.textContent = `${p1.nome} venceu!`;
        }
        else if(total1 < total2){
            text.textContent = `${p2.nome} venceu!`;
        }else{
            text.textContent = "Empate!"
        }
    },6000);
})

// problemas a corrigir: deixar moblie