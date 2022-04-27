let button = document.querySelector('.input-check');
let info = document.querySelector('.collapse-container');

button.onclick = function() {
    info.classList.toggle('collapse-entered');
}