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

function linkToPage(linkSource) {

}

const newQuote = () => {
    var randomIndex = Math.floor(Math.random() * (data.length));

    document.getElementById('quoteDisplay').innerHTML = data[randomIndex].text; 
    document.getElementById('authorDisplay').innerHTML = data[randomIndex].author; 
    document.getElementById('dateDisplay').innerHTML = data[randomIndex].year; 

    document.getElementById("buttonSource").setAttribute("onClick", ); 
}
"window.open('https://google.com')"