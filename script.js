let side = 16;
let grid = document.querySelector(".grid");
for(let i=0; i<side; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    for(let j=0; j<side; j++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel)
    }
    grid.appendChild(row);
}