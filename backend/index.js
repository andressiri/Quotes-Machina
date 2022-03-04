const express = require("express");
const path = require("path");
const quotes = require("./Quotes");

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

//app.get('/', (req, res) => {
//    const randomQuote = quotes[Math.floor(Math.random() * 10)];
//    res.send(`<h1>${randomQuote.quote}</h1><h3>${randomQuote.author}</h3>`);
//});

app.get('/quotes', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * 10)];
    res.json(randomQuote);
});

app.get('/quotes/:id', (req, res) => {
    const found = quotes.some(quote => quote.id === req.params.id);
    if (found) {
        const auxArr = quotes.filter(quote => quote.id === req.params.id);
        res.json(auxArr[0]);
    } else {
        res.status(400).json({msg: `No quote with the id of ${req.params.id}` })
    };    
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));