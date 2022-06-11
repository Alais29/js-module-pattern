// 1. IMPORTACIONES
import { sum } from "./lib/calculator.js";

// 2. VARIABLES
const getResult = document.querySelector("#getResult");
const result = document.querySelector("#result");
const form = document.querySelector("form");

// 3. EVENTS
getResult.addEventListener("click", (e) => {
  e.preventDefault();

  const qty1 = form["qty1"].value;
  const qty2 = form["qty2"].value;

  const resultSum = sum(parseInt(qty1), parseInt(qty2));
  result.innerHTML = `${resultSum}`;

  return;
});
