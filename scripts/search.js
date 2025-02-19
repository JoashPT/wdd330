import { quoteCardAddTemplate } from "./utility.mjs";

let result = document.querySelector(".result");
const sourceQuote = JSON.parse(localStorage.sourceQuote) || [];

// const store = document.querySelector(".store");
// store.addEventListener("click", () => {
//     savedQuote.push(result.textContent);
//     localStorage.storedQuote = JSON.stringify(savedQuote);
// })

// const display = document.querySelector(".display");
// display.addEventListener("click", () => {
//     result.innerHTML = "";
//     const storedArray = JSON.parse(localStorage.storedQuote);
//     console.log(storedArray);
//     for (let i = 0; i < storedArray.length; i++) {
//         const parsedStoredArray = document.createElement("p");
//         parsedStoredArray.textContent = `${storedArray[i].quote} -${storedArray[i].author}`;
//         result.appendChild(parsedStoredArray);
//     }
// })

const searchBar = document.querySelector(".searchBar");
const searchButton = document.querySelector(".search");
searchButton.addEventListener("click", () => {
    result.innerHTML = "";
    const match = new RegExp(searchBar.value, "i")
    const searchQuote = sourceQuote.filter(item => item.quote.search(match) !== -1);
    for (let i = 0; i < searchQuote.length; i++) {
        quoteCardAddTemplate(result, searchQuote[i]);   
        // const searchedQuote = document.createElement("p");
        // searchedQuote.textContent = `${searchQuote[i].quote} -${searchQuote[i].author}`;
        // console.log(searchedQuote);
        // result.appendChild(searchedQuote);
    }
})