// tady je místo pro náš program

let nadpis = document.querySelector("h1");

nadpis.classList.add("zluty");
nadpis.classList.remove("zluty");

let ctverecek = document.querySelector("div.zluty");
ctverecek.classList.add("ctverecek");


let pocitadlo = 0;
function priNajetiNaCtverec() {
  console.log("test" + pocitadlo);
  pocitadlo++;
}

function zmenStyl() {
  nadpis.classList.toggle("zeleny");
}

let odstavec = document.querySelector("p.odstavec");
function zmenaWeight() {
  odstavec.classList.add("tucne");
}
function puvodniWeight() {
  odstavec.classList.remove("tucne");
}

function zmenBarvu() {
  odstavec.classList.add("cerveny");
}

function zmenVelikost() {
  let style = window.getComputedStyle(odstavec, null).getPropertyValue("font-size");
  let currentSize = parseFloat(style);
  odstavec.style.fontSize = (currentSize + 1) + 'px';
}

function startAudio() {
  let audioFile = document.getElementById("zvukovaStopa");
  audioFile.play();
  console.log("Zapínám píseň");
}

function prehraj() {
  let audioFile = document.getElementById("zvukovaStopa");
  audioFile.play();
}

function pauzni() {
  let audioFile = document.getElementById("zvukovaStopa");
  audioFile.pause();
}

function hlasitostMin() {
  let audioFile = document.getElementById("zvukovaStopa");
  audioFile.volume = 0;
}

function hlasitostMax() {
  let audioFile = document.getElementById("zvukovaStopa");
  audioFile.volume = 1;
}

function hlasitostMid() {
  let audioFile = document.getElementById("zvukovaStopa");
  audioFile.volume = 0.5;
}