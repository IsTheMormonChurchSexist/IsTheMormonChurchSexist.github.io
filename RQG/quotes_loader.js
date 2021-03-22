const QUOTES_JSON_FILE_PATH = 'quotes.json';

$(document).ready(() => {

    let quotesListAnchor = $('quotes-list-anchor');

    fetchFromJson(QUOTES_JSON_FILE_PATH, quotes => {
        quotes.forEach((quote, i) => {
            
            const ID = `${i}`;

            let quoteListElement = buildQuoteListElement(quote, ID);
            $(quotesListAnchor).append(quoteListElement);
        });

    });
});

function fetchFromJson(jsonFilePath, callback) {
    $.getJSON(jsonFilePath, callback);
}

function buildQuoteListElement(quote, identifier) {

    const { text, author, year, source, weblink } = quote;
    return `
        <div class="quote-group" id="quote-${identifier}">
            <p class="text-group" id="text-${identifier}">
                ${text}
            </p>
            <div class="citation-group" id="citation-${identifier}">
                ${author}, ${year}
            </div>
            <div class="source-group" id="source-link-${identifier}" onclick="NewTab()" >
                ${source}
            </div>
        </div>
    `;
}

function NewTab() { 
    window.open( 
      "sorry.html", "_blank"); 
} 