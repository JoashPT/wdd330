import { quoteCardRemoveTemplate } from "./utility.mjs";

let result = document.querySelector(".result");
window.addEventListener("DOMContentLoaded", () => {
    result.innerHTML = "";
    const storedQuote = localStorage.getItem('storedQuote');
    const storedArray = storedQuote ? JSON.parse(localStorage.storedQuote) : [];
    console.log(storedArray);
    for (let i = 0; i < storedArray.length; i++) {
        quoteCardRemoveTemplate(result, storedArray[i], i)
        // const parsedStoredArray = document.createElement("p");
        // parsedStoredArray.textContent = `${storedArray[i].quote} -${storedArray[i].author}`;
        // result.appendChild(parsedStoredArray);
    }
})