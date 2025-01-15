let gridContainer = document.querySelector("#grid-container");

function createGrid(num) {
    num = prompt("Please enter the length/width of your grid. Default is 16");
    
    if (num === "" || num == null) {
        num = 16;
    };

    if (num > 100 || num < 0) {
        createGrid(16);
        return;
    };
    
    let containerWidth = (num * 20);
    gridContainer.style.width = `${containerWidth}px`;
    gridContainer.style.height = `${containerWidth}px`;
    gridContainer.innerHTML = "";

    let square = num * num;
    for (let i = 0; i < square; i++){
        const div = document.createElement("div");
        div.classList.add("div");
        gridContainer.appendChild(div);
    };

    let divs = document.querySelectorAll(".div");

    function rgbContainer() {
        let rgb = 
        [Math.floor(Math.random() * 255), 
        Math.floor(Math.random() * 255), 
        Math.floor(Math.random() * 255)];
        return rgb;
    };
    
    let rgbValues = rgbContainer();

    divs.style = `background-color: rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]});`;

    let rgbDisplayer = document.querySelector("#rgb-displayer");

    rgbContainer();

    rgbDisplayer.textContent = `rgb ${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}`;

    divs.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
        });
    });

};

createGrid(16);

let resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
    createGrid();
});

//initial div rgb color not going through. maybe function calling order
//no idea how im going to update the rgb/opacity every eventupdate
