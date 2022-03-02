const express = require("express");
const quotes = require("./Quotes");

const app = express();

app.get('/', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * 10)];
    res.send(`<h1>${randomQuote.quote}</h1><h3>${randomQuote.author}</h3>`);
});

app.get('/quotes', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * 10)];
    res.json(randomQuote);
});

app.get('/quotes/:id', (req, res) => {
    const found = quotes.some(quote => quote.id === parseInt(req.params.id));
    if (found) {
        res.json(quotes.filter(quote => quote.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No quote with the id of ${req.params.id}` })
    };    
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));