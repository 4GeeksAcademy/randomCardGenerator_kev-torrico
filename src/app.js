/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatorio(lista) {
    let numeroAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numeroAleatorio];
  }
  let iconos = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let icono = aleatorio(iconos);
  let elementIconoArriba = document.querySelector("#iconoArriba");
  elementIconoArriba.innerHTML = icono;

  let numeroCarta = aleatorio(numeros);
  let elementNumCarta = document.getElementById("numeroCarta");
  elementNumCarta.innerHTML = numeroCarta;

  let elementIconoAbajo = document.querySelector("#iconoAbajo");
  elementIconoAbajo.innerHTML = icono;

  elementIconoAbajo.style.transform = "rotate(180deg)";

  if (icono == "♥" || icono == "♦") {
    elementIconoAbajo.style.color = "red";
    elementIconoArriba.style.color = "red";
  }
};
