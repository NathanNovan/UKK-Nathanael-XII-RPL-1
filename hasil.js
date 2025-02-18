function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function deleteCharacter() {
    let display =
    document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (value === "") {
        result.textContent ="0"; 
    } else {
        result.textContent = display.value;
    }
}

function percentCharacter() {
    document.getElementById('display')
    display.value = eval(display.value + "/100");

}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert ='input Salah'
    }
}