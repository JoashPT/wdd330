import { quoteCardAddTemplate } from "./utility.mjs";

const urlJson = '../json/errorQuote.json';
const url = 'https://the-personal-quotes.p.rapidapi.com/quotes/tags/happiness';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3238e06687mshd306735c4219bfbp137ecdjsn629fd1f9b9ea',
		'x-rapidapi-host': 'the-personal-quotes.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result);
	localStorage.sourceQuote = JSON.stringify(result);
} catch (error) {
	console.error(error);
    try {
        const response = await fetch(urlJson);
        const result = await response.json;
        localStorage.sourceQuote = JSON.stringify(result);
    } catch (error) {
        console.error(error);
    }
}

// const quote = [
//     {quote:"It’s not always that we need to do more but rather that we need to focus on less.", author:"Aleph"},
//     {quote:"Concentration produces wealth. Diversification protects wealth.", author:"Beth"},
//     {quote:"What you are aware of you are in control of. What you are not aware of is in control of you.", author:"Gimmel"},
//     {quote:"The problem isn’t that you feel like shit.The problem is that you’re behaving like shit and then blaming it on your feelings.", author:"Tau"},
//     {quote:"Where you are is a result of who you were, but where you go depends entirely on who you choose to be.", author:"Nau"},
//     {quote:"Don’t postpone joy until you have learned all of your lessons. Joy is your lesson.", author:"Eggsilog"}
// ]
const sourceQuote = localStorage.getItem('sourceQuote');
const quote = sourceQuote ? JSON.parse(localStorage.sourceQuote) : [];
const userQuote = [];
let sample = document.querySelector(".try");
let result = document.querySelector(".result");
let resultRandom = document.querySelector(".resultRandom");

const random = document.querySelector(".random");
random.addEventListener("click", () => {
    resultRandom.innerHTML = "";
    let randomElement = Math.floor(Math.random() * quote.length);
    quoteCardAddTemplate(resultRandom, quote[randomElement]);

    
    //result.textContent = `${quote[randomElement].quote} -${quote[randomElement].author}`;
})



const quoteCreate = document.querySelector(".quoteCreate");
const create = document.querySelector(".create");
create.addEventListener("click", () => {
    const newQuote = {quote:quoteCreate.value, author:"Anonymous"};
    userQuote.push(newQuote);
    result.innerHTML = "";
    quoteCardAddTemplate(result, newQuote);
    //result.textContent = `${userQuote[userQuote.length - 1].quote} -${userQuote[userQuote.length - 1].author}`;
    quoteCreate.value = "";
})

// const addQuote = document.querySelector(".addQuote");
// console.log(addQuote);
// while (addQuote !== null) {
//     console.log(addQuote);
//     addQuote.addEventListener("click", addToStorage(addQuote.closest(".quote"), addQuote.closest(".author")));
// }

// document.querySelector('.result').addEventListener('click', function(event) {
//     if (event.target && event.target.matches('button.dynamic')) {
//         console.log('Dynamically added button clicked');
//     }
// });


// const savedQuote = [] || JSON.parse(localStorage.storedQuote);
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


