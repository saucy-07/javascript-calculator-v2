let screen = document.getElementById("screen");

let addVal=(val)=>{
    screen.value+=val;
}

let addOpp=(val)=>{
    screen.value+=val;
}

function equ() {
    document.getElementById("screen");
    screen.value=eval(screen.value)
}

function clr() {
    screen.value = "";
}

function del() {
    screen.value = screen.value.slice(0,-1);
}