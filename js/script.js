import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculeteIMC } from "./utils.js";
import { notANumber } from "./utils.js";

const form = document.querySelector("form")

const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    const wheighOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
    
    if (wheighOrHeightIsNotANumber) {
        AlertError.open();
        
        return;
    }

    AlertError.close();

    const result = calculeteIMC(weight, height);
    displayResultMessage(result);
    
    inputHeight.value = '';
    inputWeight.value = '';
}

const displayResultMessage =(result) => {
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerHTML = message;

    Modal.open();
}