document.addEventListener("DOMContentLoaded", ()=>{
    const players = JSON.parse(localStorage.getItem("players"));

    if(players && players.length === 2){
        const p1 = players[0]
        const p2 = players[1]

    // att images
    document.getElementById("img1").src = p1.profile
    document.getElementById("img2").src = p2.profile
    }

})