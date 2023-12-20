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
    }
});

function moveAcross(input) {
    var currentLength = input.value.length;
  
    if (currentLength >= 1) {
        var nextCell = input.parentElement.nextElementSibling;
        if (nextCell !== null && nextCell.querySelector('input') !== null) {
            var nextInput = nextCell.querySelector('input');
            nextInput.focus();
        } else {
            input.blur();
        }
    }
};

// function moveDown(input) {
//     const currentCell = input.parentElement;
//     const nextRow = currentCell.parentElement.nextElementSibling;
//     const cells = nextRow.querySelectorAll('td');
//     const targetCell = cells[currentCell.cellIndex];
//     const isThereInput = targetCell.querySelector('input');
//     var currentLength = input.value.length;
//     if (currentLength >= 1){
//         if (isThereInput) {
//             isThereInput.focus();
//         } else {
//             isThereInput.blur();
//         }
//         return true;
//     }
//     else return false;
//   };

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
  
function applyAllFunc(input) {
    moveAcross(input)
    checkCase(input);
    checkAnswer(input);
};

function applyPropertiesToInputs() {
    var inputs = document.querySelectorAll('input');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            applyAllFunc(input);
        });
    });
};

document.addEventListener('DOMContentLoaded', function() {
    applyPropertiesToInputs();
});
