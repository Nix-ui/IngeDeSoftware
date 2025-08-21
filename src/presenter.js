import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  var result =  event.submitter.id === "sumar-button" ?
    sumar(firstNumber, secondNumber) :
    multiplicar(firstNumber, secondNumber);
  div.innerHTML = "<p>" + result + "</p>";
});
