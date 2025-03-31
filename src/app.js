import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function obternerNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function () {
  //write your code here
  let who = ["my children", "my brother", " my aunt", "my friend"];
  let action = ["ate", "crash", "broke", "paid"]
  let what = ["my house", "the bike", " the bill", "The bread"];
  let when = ["after school", "in the restaurant", "while I was sleeping", "while I was driving"]

  let indiceWho = obternerNumeroAleatorio(who.length);
  let indiceAction = obternerNumeroAleatorio(action.length);
  let indiceWhat = obternerNumeroAleatorio(what.length);
  let indiceWhen = obternerNumeroAleatorio(when.length);

  var wordWho = who[indiceWho];
  var wordAction = action[indiceAction];
  var wordWhat = what[indiceWhat];
  var wordWhen = when[indiceWhen];


  let elementoP = document.getElementById("excuse");
  elementoP.innerHTML = wordWho + " " + wordAction + " " + wordWhat + " " + wordWhen;





};

