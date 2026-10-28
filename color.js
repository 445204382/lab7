document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#color-form').onsubmit = function() {
        const color = document.querySelector('#color').value;
        document.querySelector('#hello').style.color = color;
        return false;
    };
});