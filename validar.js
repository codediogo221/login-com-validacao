document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const loginInput = document.getElementById("ilogin");
        const senhaInput = document.getElementById("isenha");

        const loginValue = loginInput.value.trim();
        const senhaValue = senhaInput.value.trim();

        if (loginValue === "" || senhaValue === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("Login realizado com sucesso!");
        }
    });
});
