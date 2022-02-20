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