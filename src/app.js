import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function obternerNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  //write your code here
  let who =["my children"  ,   "my brother" , " my aunt" , "my friend"];
  let actie = ["ate" , "crash" , "broke" , "paid"]
  let wat =["my house", "the bike", " the bill", "The bread"];
  let wanneer =["after school","in the restaurant", "while I was sleeping","while I was driving"]
  
  let indice = obternerNumeroAleatorio(who.length);
  let ind = obternerNumeroAleatorio (actie.length);
  let where = obternerNumeroAleatorio (wat.length);
  let when =obternerNumeroAleatorio (wanneer.length);
  
  var palabra  = who [indice];
  var accion= actie[ind];
  var donde = wat[where];
  var cuando = wanneer[when];

  
  let elementoP = document.getElementById("excuse");
  elementoP.innerHTML = palabra  + " "  + accion + " " + donde + " " + cuando;

  console.log(palabra);

  
  
};

