
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight-70;
canvas.width = window.innerWidth-30;

window.addEventListener('load',()=>{
    document.getElementById('splash').style.borderRadius = "50%";
    document.getElementById('splash').style.top = "50%";
    document.getElementById('splash').style.bottom = "50%";
    document.getElementById('splash').style.left = "50%";
    document.getElementById('splash').style.right = "50%";
})

let penWidth = 5;
let penColor = "white";
let painting = false;
let penColorbackup = penColor;
let widthBackup = penWidth;
function startPosition(){
    painting = true;
    draw(e);
}
function finshedPosition() {
    painting = false;
    ctx.beginPath();
}
function draw(e) {
if (!painting) return;
ctx.lineWidth = penWidth;
ctx.strokeStyle = penColor;
ctx.lineCap = "round";

ctx.lineTo(e.clientX , e.clientY);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(e.clientX,e.clientY);
}
canvas.addEventListener('mousedown',startPosition);
canvas.addEventListener('mouseup',finshedPosition);
canvas.addEventListener('mousemove',draw);


window.addEventListener('resize' , () =>{
// Resizing
canvas.height = window.innerHeight-10;
canvas.width = window.innerWidth-20;
});


function myColorChange() {
    let clr = document.getElementById('userColor').value;
    penColor = clr;
    console.warn("Pen color changed to "+clr);
}
function myWidthChange() {
    let wth = document.getElementById('userWidth').value;
    penWidth = parseInt(wth);
    console.warn("Pen Width Changed to "+wth);
}
document.getElementById('userWidth').addEventListener('mouseup', myWidthChange);
document.getElementById('userWidth').addEventListener('touchend', myWidthChange);
document.getElementById('userColor').addEventListener('input', myColorChange);
var isEraserEnabled = false;
function myEraserEnable() {
    if (isEraserEnabled)
    {
        isEraserEnabled = false;
        penColor = penColorbackup;
        penWidth = widthBackup;
        console.warn("Eraser disabled");    
    }
    else{
        penColorbackup = penColor;
        widthBackup = penWidth;
        isEraserEnabled = true;
        penColor = "#161616";
        penWidth = "50";
        console.warn("Eraser enabled");    
    }
}