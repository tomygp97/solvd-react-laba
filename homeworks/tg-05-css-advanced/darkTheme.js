document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.getElementById("dark-mode-button");

    darkModeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");
        
    });
});