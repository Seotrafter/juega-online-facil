 const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');
    
    
    function handleFormSubmit(event) {
        event.preventDefault();
        window.location.href = "/thans.html";
    }
    
    function formsInit() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', handleSubmit);
        });
    }

    document.addEventListener('DOMContentLoaded', formsInit);
});
