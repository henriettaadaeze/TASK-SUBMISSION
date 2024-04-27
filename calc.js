Calculator_Display
function display(val) {
    document.getElementById('result').value +=val
    return val
}

Calculator_Display

function solve() {

    let x = document.getElementById ('result').value 
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}

Calculator_Solve

    function clearScreen() {
document.getElementById('result').value = '' 
    }

    

