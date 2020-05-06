// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const sizePicker = document.getElementById("sizePicker");
//Selecting canvas
const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
// make grid
function makeGrid() {

    for (let index = 0; index < height.value; index++) {
        const element = canvas.insertRow(index);
        
        for (let r = 0; r < width.value; r++) {
            const cell = element.insertCell(r);
                cell.addEventListener("click", fillSquare);
        } 
    }
}
// event listener

color.addEventListener("click", function() {});

// form grid
sizePicker.onsubmit = function(event) {

    event.preventDefault();

    clearGrid();

    makeGrid();

};

// clear grid
function clearGrid(){
    while (canvas.firstChild) {

        canvas.removeChild(canvas.firstChild);

    }

}
// filling the grid with selected colors
function fillSquare(){

    this.setAttribute("style", `background-color: ${color.value}`);


}

