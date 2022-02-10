var display = document.getElementById('display');

function press(x){
    display.value += x;
}

function del(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value)
}

function PI(){
    display.value += Math.PI
}

function STEPEN(){
    display.value = Math.pow(display.value, 2)
}

function PROSENT(){
    display.value += ",00"
}