// All credits accorded to https://github.com/wesbos & big thanks !
let key = document.querySelector('kbd');
let sound = document.getElementsByClassName('sound');

kbd.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += `${e.code};`
}
// voir dans les credits la solution car le coach ne la donne pas 