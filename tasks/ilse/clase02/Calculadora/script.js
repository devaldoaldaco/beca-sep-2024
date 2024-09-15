document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.value;
            
            if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
            }

            display.value = currentInput;
        });
    });

    clearButton.addEventListener('click', () => {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.value = '';
    });

    equalsButton.addEventListener('click', () => {
        if (previousInput && operator && currentInput) {
            const result = eval(`${previousInput} ${operator} ${currentInput}`);
            display.value = result;
            currentInput = result;
            previousInput = '';
            operator = '';
        }
    });
});
