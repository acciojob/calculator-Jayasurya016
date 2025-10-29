document.addEventListener('DOMContentLoaded', () => {
    const inputDisplay = document.getElementById('input');
    const buttonsGrid = document.getElementById('buttons-grid');

    const appendToDisplay = (value) => {
        if (inputDisplay.value === '0' && value !== '.') {
            inputDisplay.value = value;
        } else {
            inputDisplay.value += value;
        }
    };

    buttonsGrid.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName !== 'BUTTON') {
            return; 
        }

        const buttonId = target.id;
        const buttonValue = target.textContent.trim();

        if (buttonId.startsWith('block') || buttonId === 'dot') {
            appendToDisplay(buttonValue);
        }

        else if (['plus', 'minus', 'multiply', 'divide'].includes(buttonId)) {
            const lastChar = inputDisplay.value.slice(-1);
            if (!['+', '-', '*', '/'].includes(lastChar)) {
                appendToDisplay(buttonValue);
            }
        }

        else if (buttonId === 'clr') {
            inputDisplay.value = '';
        }

        else if (buttonId === 'ans') {
            try {
                let result = eval(inputDisplay.value);

                if (result === Infinity) {
                    inputDisplay.value = 'Infinity';
                } 
                else if (isNaN(result)) {
                    inputDisplay.value = 'NaN';
                }
                else {
                    inputDisplay.value = result;
                }
            } catch (error) {
                inputDisplay.value = 'Error';
            }
        }
    });

    document.getElementById('clr').addEventListener('click', () => {
        inputDisplay.value = '';
    });
});