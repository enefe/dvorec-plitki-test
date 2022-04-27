let button = document.querySelector('.input-check');
let info = document.querySelector('.collapse-container');
let border = document.querySelector('.bx-soa-section');

button.onclick = function() {
    /* info.classList.toggle('collapse-entered'); */
    if (info.classList.contains('collapse-entered')) {
        info.classList.remove('collapse-entered');
        border.style.border = '1px solid #bd956a';
    } else {
        info.classList.add('collapse-entered');
        border.style.border = '1px solid #e8e8e8';
    }
}