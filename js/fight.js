const btn = document.getElementById("btn")
const characters = document.getElementById("characters")
const loading = document.getElementById("loading")
document.addEventListener("DOMContentLoaded", ()=>{
    const players = JSON.parse(localStorage.getItem("players"));

    if(players && players.length === 2){
        const p1 = players[0]
        const p2 = players[1]

    // att images
    document.getElementById("img1").src = p1.profile
    document.getElementById("img2").src = p2.profile

    // att names
    document.getElementById("name1").innerHTML = p1.nome
    document.getElementById("name2").innerHTML = p2.nome
    }

})
btn.addEventListener("click",() => {
    characters.style.display = "none"
    btn.style.display = "none"
    loading.style.display = "flex"
    setTimeout(() => {
        characters.style.display = "flex"
        btn.style.display = "flex"
        loading.style.display = "none"
    },6000);
})