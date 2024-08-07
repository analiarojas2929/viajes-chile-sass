// assets/js/index.js
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado con éxito!');
});
