document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('color-toggle');
    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    });
});