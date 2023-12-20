// keyboard navigation

document.addEventListener('keydown', function(event) {
    const activeElement = document.activeElement;

    if (event.key === 'ArrowUp') {
        const cell = activeElement.parentElement;
        const prevRow = cell.parentElement.previousElementSibling;
        if (prevRow) {
            const targetCell = prevRow.children[cell.cellIndex];
            const input = targetCell.querySelector('input');
            if (input) {
                input.focus();
            }
        }
    } else if (event.key === 'ArrowDown') {
        const cell = activeElement.parentElement;
        const nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
            const targetCell = nextRow.children[cell.cellIndex];
            const input = targetCell.querySelector('input');
            if (input) {
                input.focus();
            }
        }
    } else if (event.key === 'ArrowLeft') {
        const cell = activeElement.parentElement;
        const prevCell = cell.previousElementSibling;
        if (prevCell) {
            const input = prevCell.querySelector('input');
            if (input) {
                input.focus();
            }
        }
    } else if (event.key === 'ArrowRight') {
        const cell = activeElement.parentElement;
        const nextCell = cell.nextElementSibling;
        if (nextCell) {
            const input = nextCell.querySelector('input');
            if (input) {
                input.focus();
            }
        }
    } else if (event.key === 'Backspace' && activeElement.value === '') {
        const cell = activeElement.parentElement;
        const prevCell = cell.previousElementSibling;
        if (prevCell) {
            const input = prevCell.querySelector('input');
            if (input) {
                input.focus();
                input.value = '';
            }
        }
    }
});

// biger than one char constraint

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(function(input) {
        input.addEventListener('input', function(event) {
            if (input.value.length > 1) {
                input.value = input.value.slice(0, 1);
            }
        });
    });
});

// check inputs

function checkCase(input) {
    input.value = input.value.toUpperCase();
};

function checkAnswer(input) {
    if (input.value === input.placeholder.toUpperCase()) {
        input.style.color = '#3ddc3d';
    } else {
        input.style.color = '';
    }
};

// alerts

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.sh-h-answers');

    link.addEventListener('click', function(event) {

      alert('Поздравляю! Вы проиграли');
    });
  });

function checkAllCellsFilled() {
    const inputs = document.querySelectorAll('input');
    const allFilled = Array.from(inputs).every(input => input.value === input.placeholder.toUpperCase());

    if (allFilled) {
        alert('Поздравляю! Вы молодец и готовы к Экзамену');
    }
};

// move focus

let direction = 'across';

function moveAcross(input) {
    const currentLength = input.value.length;
    const nextCell = input.parentElement.nextElementSibling;

    if (currentLength >= 1 && nextCell && nextCell.querySelector('input')) {
        const nextInput = nextCell.querySelector('input');
        if (nextInput.value.length === 0) {
            nextInput.focus();
            direction = "across";
        } else {
            moveAcross(nextInput);
        }
        return true;
    } else {
        input.blur();
        return false;
    }
}

function moveDown(input) {
    const currentCell = input.parentElement;
    const nextRow = currentCell.parentElement.nextElementSibling;

    if (nextRow) {
        const cells = nextRow.querySelectorAll('td');
        const targetCell = cells[currentCell.cellIndex];

        if (targetCell && targetCell.querySelector('input')) {
            const isThereInput = targetCell.querySelector('input');
            if (isThereInput.value.length === 0) {
                isThereInput.focus();
                direction = 'down';
            } else {
                moveDown(isThereInput);
            }
            return true;
        } else {
            input.blur();
            return false;
        }
    }
    return false;
}

function applyAllFunc(input) {
    if (direction === "across") {
        if (!moveAcross(input)) {
            moveDown(input);
        }
    } else if (direction === "down") {
        if (!moveDown(input)) {
            moveAcross(input);
        }
    } else {
        if (!moveAcross(input)) {
            moveDown(input);
        }
    }

    checkCase(input);
    checkAnswer(input);
}



function applyPropertiesToInputs() {
    var inputs = document.querySelectorAll('input');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            applyAllFunc(input);
            checkAllCellsFilled();
        });
    });
};

document.addEventListener('DOMContentLoaded', function() {
    applyPropertiesToInputs();
});
