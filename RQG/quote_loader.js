const QUOTES_JSON_FILE_PATH = 'quotes.json';

$(document).ready(() => {
    let quotesListAnchor = $('quotes-list-anchor');

    const nb = `4`;
    let element = buildElement(nb);
    $(quotesListAnchor).append(element);

    /**fetchFromJson(QUOTES_JSON_FILE_PATH, quotesData => {
        quotesData.forEach((quote, i) => {
            
            const ID = `quote-${i}`;

            let quoteListElement = buildQuoteListElement(quote, ID);
            $(quotesListAnchor).append(quoteListElement);

        });
    });**/
});

function fetchFromJson(jsonFilePath, callback) {
    $.getJSON(jsonFilePath, callback);
}

function buildQuoteListElement(quoteData, identifier) {
    return `
            <div>
                test
            </div>
    `;
}

function buildElement(number) {
    return `
            <div>
                test ${number}
            </div>
    `;
}