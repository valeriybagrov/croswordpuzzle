function moveToNext(input) {
  var currentLength = input.value.length;

  if (currentLength >= 1) {
      var nextInput = input.parentElement.nextElementSibling.querySelector('input');
      nextInput.focus();
  } 
};

function checkCase(input) {
  input.value = input.value.toUpperCase()
};

function checkAnswer(input) {
  if (input.value === input.placeholder.toUpperCase()) {
      input.style.color = '#00FF00';
  }
};

function aplyAllFunc(input) {
  moveToNext(input);
  checkCase(input);
  checkAnswer(input);
};

function applyPropertiesToInputs() {
  var inputs = document.querySelectorAll('input');

  inputs.forEach(function(input) {
      input.setAttribute('oninput', 'aplyAllFunc(this)');
  });
}

// Вызываем функцию после загрузки документа
document.addEventListener('DOMContentLoaded', function() {
    applyPropertiesToInputs(); // Применяем свойства ко всем input'ам
});