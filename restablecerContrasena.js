document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".recover-form");
    const emailInput = document.getElementById("recover-email");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Generar un número de 6 dígitos al azar
        const verificationCode = Math.floor(100000 + Math.random() * 900000);

        // Configurar el correo electrónico con Elastic Email
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "m.fit1724@gmail.com",
            Password: "aero2002",
            To: emailInput.value,
            From: "m.fit1724@gmail.com",
            Subject: "Código de verificación - M-Fit",
            Body: `Tu código de verificación para restablecer la contraseña es: ${verificationCode}`
        }).then(
            message => alert("Correo enviado: " + message)
        ).catch(
            error => alert("Error al enviar el correo: " + error)
        );
    });
});
