var quotes = [
    {
        quote: `"The best revenge is massive success."`,
        author: "--Frank Sinatra", 
    },
    {
        quote: `"It's not what happens to you, but how you react to it that matters."`,
        author: "--Epictetus",
    },
    {
        quote: `"Resentment is like drinking poison and waiting for your enemies to die."`,
        author: "--Nelson Mandela",
    },
    {
        quote: `"The biggest adventure you can take is to live the life of your dreams."`,
        author: "--Oprah Winfrey",
    },{
        quote:`"You miss 100% of the shots you don't take."`,
        author: "--Wayne Gretzy",
    }
]

function display(){
    var randomIndex = Math.floor(Math.random() * quotes.length);    
    var randomQuote = quotes[randomIndex]; 
    document.getElementById("quoteId").innerHTML = randomQuote.quote;
    document.getElementById("quoteAuthor").innerHTML = randomQuote.author;
}