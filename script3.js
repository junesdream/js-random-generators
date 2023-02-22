const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .author-name");
const quoteBtn = document.querySelector(".quote-button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

//Function for Randomquote
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText ="Loading Quote...";
    //fetching random quotes/data from the API and parsing into JS object
    fetch("https://dummyjson.com/quotes/random")
    .then(res => res.json())
    .then(result => {
        console.log(result);
        quoteText.innerText = result.quote;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
	//Using SpeechSynthesisUtterance: a web speech api what represents a speech request
	let utterance = new SpeechSynthesisUtterance(
		`${quoteText.innerText} by${authorName.innerText}`
	);
    //Speack mehtod of speechSynthesis speaks the utternance 
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    //To copy the quote text on copyBtn click
    //writeText() property writes tge specified text string to the system clipboard 
	navigator.clipboard.writeText(quoteText.innerText);
});

copyBtn.addEventListener("click", () => {
  let twitterUrl = `http://twitter.com/intent/tweet?url=${quoteText.innerText}`
	navigator.clipboard.writeText(quoteText.innerText);
    window.open(tweetUrl, "blank") //opeing a new twitter tab with passing quote unb the url
});

quoteBtn.addEventListener("click", randomQuote);