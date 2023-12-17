function moveToNext(input) {
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

function checkCase(input) {
    input.value = input.value.toUpperCase();
};

function checkAnswer(input) {
    if (input.value === input.placeholder.toUpperCase()) {
        input.style.color = '#00FF00';
    } else {
        input.style.color = '';
    }
};
  
function applyAllFunc(input) {
    moveToNext(input);
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
