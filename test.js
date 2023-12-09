
var divs = document.querySelectorAll('input');
for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add('maxlength="1" oninput="moveToNext(this)"');
}