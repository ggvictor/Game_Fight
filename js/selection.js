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
    profile: "img/midoriya_fight.png"
  },
]

const img = document.querySelectorAll(".img");
const btn_next = document.querySelector("#btn_next")

img.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("border")
    choosePlayers();
  });
});

const choosePlayers = ()=>{
  const imgChecked = document.querySelectorAll(".border")
  if(imgChecked.length === 2){
    btn_next.style.display = "flex";
  }
  else{
    btn_next.style.display = "none";
  }
}
