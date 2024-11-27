// validarCampos.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("create-account-form");
    const emailInput = document.getElementById("email");
    const confirmEmailInput = document.getElementById("confirm-email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validar que los correos coincidan
        if (emailInput.value !== confirmEmailInput.value) {
            alert("Los correos no coinciden. Por favor, verifica que ambos correos sean iguales.");
            return;
        }

        // Validar la seguridad de la contraseña
        const password = passwordInput.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[A-Za-z\d!@#\$%\^&\*]{8,}$/;

        if (!passwordRegex.test(password)) {
            alert("La contraseña no cumple con los requisitos. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.");
            return;
        }

        // Si todo es válido, enviar el formulario (simulado aquí con una alerta)
        alert("Cuenta creada exitosamente!");
        form.reset();
    });
});
