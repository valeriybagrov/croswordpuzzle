function moveToNext(input) {
  var maxLength = parseInt(input.getAttribute('maxlength'));
  var currentLength = input.value.length;

  if (currentLength >= maxLength) {
      var nextInput = input.parentElement.nextElementSibling.querySelector('input');

      if (nextInput != null) {
          nextInput.focus();
      }
  }
}

  // Функция, которая применяет свойства ко всем input'ам
  function applyPropertiesToInputs() {
    var inputs = document.querySelectorAll('input'); // Выбираем все элементы input

    inputs.forEach(function(input) {
        input.setAttribute('maxlength', '1'); // Устанавливаем maxlength="1"
        input.setAttribute('oninput', 'moveToNext(this)'); // Устанавливаем oninput="moveToNext(this)"
    });
}

// Вызываем функцию после загрузки документа
document.addEventListener('DOMContentLoaded', function() {
    applyPropertiesToInputs(); // Применяем свойства ко всем input'ам
});