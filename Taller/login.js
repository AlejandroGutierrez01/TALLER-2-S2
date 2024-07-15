document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault()
    const usuario = document.getElementById("usuario").value
    const contrasena = document.getElementById("contrasena").value
    const errorMessage = document.getElementById("error-message")

    const usuarioValido = "Alejandro"
    const contrasenaValida = "1234"

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        errorMessage.textContent = ""
        window.location.href = "verificar-edad.html"
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo."
    }
})