function toggleDarkMode() {
    var body = document.body;
    var button = document.getElementById("button-modo");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        button.textContent = "Ativar Modo Claro"; 
    } else {
        body.classList.add("dark-mode");
        button.textContent = "Ativar Modo Escuro"; 
    }
}