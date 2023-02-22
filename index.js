//JS for Random-Color-Generator
const colorGeneratorContainerEl = document.querySelector(".color-generator-container");

for (let i = 0; i < 32; i++) {

    //Create a div in order to createElement methode
    const colorContainerEl = document.createElement("div");
    //Add class of color-conainer: colorContainerEl, classList-Property & add-Methode to add color-container
    colorContainerEl.classList.add("color-container");
    //wee need append this new element
    colorGeneratorContainerEl.appendChild(colorContainerEl);
    
}
const colorContainerEls = document.querySelectorAll(".color-container");
console.log(colorContainerEls);

generateColors();
//Function for generate color, going to all the loop 
function generateColors() {
	//Loop throught all of them using forEach-Mehtode, once fpr each elements of this array
    colorContainerEls.forEach((colorContainerEl) => {
        //1. Create Random Color Color
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

randomColor();

// Function for 
function randomColor(){
    //append char for create for color palette and we wanna create random color codes dependong on this char character
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        //create randomnumber between 0-15
        const randomNum = Math.floor(Math.random() * chars.length);
        //Add new number to this color.
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
       return colorCode;
}


