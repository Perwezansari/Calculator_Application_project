function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.innerText;

    // Handle square root
    if (expression.includes('√')) {
        expression = expression.replace('√', 'Math.sqrt');
    }

    // Handle power
    if (expression.includes('^')) {
        expression = expression.replace('^', '**');
    }

    try {
        const result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
