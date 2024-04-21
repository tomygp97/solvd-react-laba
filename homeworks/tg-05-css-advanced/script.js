document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.getElementById("dark-mode-button");

    darkModeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

    });
});

// Active class to Portfolio/Skills btn
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.tabs__btn');
    let backgroundIndicator = document.querySelector('.tabs__background-indicator');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove active class
            buttons.forEach(function(btn) {
                btn.classList.remove('active');            
            });
            // Add active class
            this.classList.add('active');
            // Move background-indicator to active button
            let leftPosition = this.offsetLeft;
            backgroundIndicator.style.left = leftPosition + 'px';
        });
    });
    // Start background-indicator position
    let activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn) {
        backgroundIndicator.style.left = activeBtn.offsetLeft + 'px';
    };
});