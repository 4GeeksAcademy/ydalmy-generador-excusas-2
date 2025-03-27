import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function obternerNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  //write your code here
  let arreglo =["my children"  ,   "my brother" , " my Car" , "my friend"];
  let action= ["ate" , "crash" , "broke" , "paid"]
  
  let indice = obternerNumeroAleatorio(arreglo.length);
  let ind = obternerNumeroAleatorio (action.length);
  
  let palabra = arreglo[indice];
  let word = action[ind];
  
  let elementoP = document.getElementById("excuse");
  elementoP.innerHTML = palabra  + " "  + word ; 

  console.log(palabra);

  
  
};

