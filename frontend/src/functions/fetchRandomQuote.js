async function fetchRandomQuote() {
    const response = await fetch('/quotes');
    //const response = await fetch('http://ec2-52-67-182-180.sa-east-1.compute.amazonaws.com:3000/quotes');
    //const response = await fetch('https://api.quotable.io/random');
    let json = await response.json();
    return json;
};

export default fetchRandomQuote;