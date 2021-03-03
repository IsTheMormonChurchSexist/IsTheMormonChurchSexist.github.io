const QUOTES_JSON_FILE_PATH = 'quotes.json'

var data;

fetch(QUOTES_JSON_FILE_PATH) 
   .then(function(response) { 
       return response.json();  
   })
   .then(function(data) { 
       this.data = data;  
       newQuote()  
}); 

const newQuote = () => {
    var randomIndex = Math.floor(Math.random() * (data.length));
    var quote = data[randomIndex];

    document.getElementById('quoteDisplay').innerHTML = quote.text; 
    document.getElementById('authorDisplay').innerHTML = quote.author; 
    document.getElementById('dateDisplay').innerHTML = quote.year; 

    document.getElementById('sourceDisplay').innerHTML = quote.source;
    document.getElementById('sourceDisplay').setAttribute("href", quote.weblink);
}
