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

document.addEventListener('DOMContentLoaded', function() {
    // Color toggle
    const toggle = document.getElementById('color-toggle');
    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    });

    // Lead modal logic
    const leadBtn = document.querySelector('.edit-lead-btn');
    const leadText = document.getElementById('lead-text');
    const modal = document.getElementById('lead-modal');
    const modalInput = document.getElementById('lead-modal-input');
    const modalForm = document.getElementById('lead-modal-form');
    const modalCancel = document.getElementById('lead-modal-cancel');
    const defaultLead = leadText.textContent.trim();

    // Open modal
    leadBtn.addEventListener('click', function() {
        modal.removeAttribute('hidden');
        modalInput.value = leadText.textContent.trim();
        modalInput.focus();
    });

    // Save new lead text
    modalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        leadText.textContent = modalInput.value.trim() || defaultLead;
        modal.setAttribute('hidden', '');
        leadBtn.focus();
    });

    // Cancel editing
    modalCancel.addEventListener('click', function() {
        modal.setAttribute('hidden', '');
        leadBtn.focus();
    });

    // Close modal on Escape key
    modal.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.setAttribute('hidden', '');
            leadBtn.focus();
        }
    });
});