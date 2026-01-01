document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.top-button');
    if (!btn) return;

    // start hidden
    btn.classList.add('hidden');

    // toggle visibility on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) btn.classList.remove('hidden');
        else btn.classList.add('hidden');
    });
});