const personagens = [
  {
    nome:"Luffy",
    força:Math.floor(Math.random()*70+5),
    inteligencia:Math.floor(Math.random()*50+10),
    agilidade:Math.floor(Math.random()*70+10),
    mp:Math.floor(Math.random()*70+10),
    profile: "img/luffy_fight.png"
  },
  {
    nome:"Naruto",
    força:Math.floor(Math.random()*70+10),
    inteligencia:Math.floor(Math.random()*60+10),
    agilidade:Math.floor(Math.random()*50+3),
    mp:Math.floor(Math.random()*70+10),
    profile: "img/naruto_fight.png"
  },
  {
    nome:"Ichigo",
    força:Math.floor(Math.random()*80+10),
    inteligencia:Math.floor(Math.random()*70+5),
    agilidade:Math.floor(Math.random()*50+1),
    mp:Math.floor(Math.random()*60+5),
    profile: "img/ichigo_fight.png"
  },
  {
    nome:"gon",
    força:Math.floor(Math.random()*70+1),
    inteligencia:Math.floor(Math.random()*70+10),
    agilidade:Math.floor(Math.random()*80+1),
    mp:Math.floor(Math.random()*65+10),
    profile: "img/gon_fight.png"
  },
  {
    nome:"Itadori",
    força:Math.floor(Math.random()*80+5),
    inteligencia:Math.floor(Math.random()*50+10),
    agilidade:Math.floor(Math.random()*60+3),
    mp:Math.floor(Math.random()*80+5),
    profile: "img/itadori_fight.png"
  },
  {
    nome:"Midoriya",
    força:Math.floor(Math.random()*70+3),
    inteligencia:Math.floor(Math.random()*80+5),
    agilidade:Math.floor(Math.random()*60+7),
    mp:Math.floor(Math.random()*75+10),
    profile: "img/midoriya_fight.png"
  },
  {
    nome:"Asta",
    força:Math.floor(Math.random()*90+5),
    inteligencia:Math.floor(Math.random()*50+10),
    agilidade:Math.floor(Math.random()*70+5),
    mp:Math.floor(Math.random()*65+7),
    profile: "img/asta_fight.png"
  },
  {
    nome:"Gash",
    força:Math.floor(Math.random()*90+5),
    inteligencia:Math.floor(Math.random()*50+10),
    agilidade:Math.floor(Math.random()*70+5),
    mp:Math.floor(Math.random()*65+7),
    profile: "img/gash_fight.png"
  },
  {
    nome:"Goku",
    força:Math.floor(Math.random()*99+0),
    inteligencia:Math.floor(Math.random()*70+10),
    agilidade:Math.floor(Math.random()*80+15),
    mp:Math.floor(Math.random()*60+5),
    profile: "img/goku_fight.png"
  },
  {
    nome:"Edward",
    força:Math.floor(Math.random()*50+5),
    inteligencia:Math.floor(Math.random()*90+3),
    agilidade:Math.floor(Math.random()*65+5),
    mp:Math.floor(Math.random()*75+10),
    profile: "img/ed_fight.png"
  },
  {
    nome:"Jotaro",
    força:Math.floor(Math.random()*80+10),
    inteligencia:Math.floor(Math.random()*70+5),
    agilidade:Math.floor(Math.random()*55+15),
    mp:Math.floor(Math.random()*75+10),
    profile: "img/jotaro_fight.png"
  },
  {
    nome:"Gintoki",
    força:Math.floor(Math.random()*70+5),
    inteligencia:Math.floor(Math.random()*60+15),
    agilidade:Math.floor(Math.random()*60+10),
    mp:Math.floor(Math.random()*65+3),
    profile: "img/gintoki_fight.png"
  },
]

const img = document.querySelectorAll(".img");
const btn_next = document.querySelector("#btn_next")

// Colocar Borda quando clicado 
img.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("border")
    choosePlayers();
  });
});

// Quando dois estiver selecionado aparecer o botão
const choosePlayers = ()=>{
  const imgChecked = document.querySelectorAll(".border")
  if(imgChecked.length === 2){
    btn_next.style.display = "flex";
  }
  else{
    btn_next.style.display = "none";
  }
}

btn_next.addEventListener("click", ()=>{
  const selecionados = document.querySelectorAll(".border")

  const players = []
  selecionados.forEach((img)=>{
    const nome = img.alt

    const personagem = personagens.find(p => p.nome.toLowerCase() === nome.toLowerCase());

    players.push(personagem)
  })
    localStorage.setItem("players",JSON.stringify(players))
    window.location.href = "fight.html"
})
