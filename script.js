//Number of pixels = side * side
let side = 16;
let grid = document.querySelector(".grid");
let drawing = false;

function createGrid(){
    for(let i=0; i<side; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j=0; j<side; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('click',()=>{
                drawing =  drawing==false? true: false;
                console.log(drawing);
            });
            pixel.addEventListener('mouseover',()=>{
                if(drawing){
                    pixel.style.backgroundColor = 'black';
                }
            })
            row.appendChild(pixel)
        }
        grid.appendChild(row);
    }
}
function clearGrid(){
    
}
createGrid();

let slider = document.querySelector("#sizeSlider");
slider.addEventListener('change',()=>{
    side = slider.value;
    clearGrid();
    createGrid();
});
slider.addEventListener('input',()=>{console.log(slider.value)});
