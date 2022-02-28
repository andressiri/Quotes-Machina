const express = require("express");

const app = express();

const quotes = [
    {
        id: 1,
        quote: "Quote 1",
        author: "Author 1"
    },
    {
        id: 2,
        quote: "Quote 2",
        author: "Author 2"
    },
    {
        id: 3,
        quote: "Quote 3",
        author: "Author 3"
    },
    {
        id: 4,
        quote: "Quote 4",
        author: "Author 4"
    },
    {
        id: 5,
        quote: "Quote 5",
        author: "Author 5"
    },
    {
        id: 6,
        quote: "Quote 6",
        author: "Author 6"
    },
    {
        id: 7,
        quote: "Quote 7",
        author: "Author 7"
    },
    {
        id: 8,
        quote: "Quote 8",
        author: "Author 8"
    },
    {
        id: 9,
        quote: "Quote 9",
        author: "Author 9"
    },
    {
        id: 10,
        quote: "Quote 10",
        author: "Author 10"
    },

];

app.get('/', (req, res) => {
    res.send('<h1>Insert Quote here<h1>');
});

app.get('/quotes', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * 10)];
    res.json(randomQuote);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));