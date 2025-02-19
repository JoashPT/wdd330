export function quoteCardAddTemplate(parentElement, item) {
    const li = document.createElement("li");
    li.classList.add("quoteCard");
    
    const quoteContent = document.createElement("p");
    quoteContent.textContent = item.quote;
    li.appendChild(quoteContent);

    const quoteAuthor = document.createElement("p");
    quoteAuthor.textContent = item.author;
    li.appendChild(quoteAuthor);
    
    const addQuote = document.createElement("button");
    addQuote.textContent = "Add";
    addQuote.addEventListener("click", (event) => {
        event.preventDefault();
        addToStorage(item.quote, item.author);
    });
    li.appendChild(addQuote);

    parentElement.appendChild(li);
  }

export function quoteCardRemoveTemplate(parentElement, item, index) {
    const li = document.createElement("li");
    li.classList.add("quoteCard");
    
    const quoteContent = document.createElement("p");
    quoteContent.textContent = item.quote;
    li.appendChild(quoteContent);

    const quoteAuthor = document.createElement("p");
    quoteAuthor.textContent = item.author;
    li.appendChild(quoteAuthor);
    
    const delQuote = document.createElement("button");
    delQuote.textContent = "Delete";
    delQuote.addEventListener("click", (event) => {
        event.preventDefault();
        delFromStorage(li, index);
    })
    li.appendChild(delQuote);

    parentElement.appendChild(li);
  }

export function addToStorage(quote, author) {
    const storedQuote = localStorage.getItem('storedQuote');
    const storage = storedQuote ? JSON.parse(localStorage.storedQuote) : [];
    storage.push({quote:quote, author:author});
    localStorage.storedQuote = JSON.stringify(storage);
}

export function delFromStorage(parentElement, index) {
    const storedQuote = localStorage.getItem('storedQuote');
    const storage = storedQuote ? JSON.parse(localStorage.storedQuote) : [];
    storage.splice(index, 1);
    localStorage.storedQuote = JSON.stringify(storage);
    parentElement.remove();
}

