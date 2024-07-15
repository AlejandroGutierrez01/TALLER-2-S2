document.getElementById("calcularEdad").addEventListener("click", function() {
    const añoNac = document.getElementById("añoNac").value;
    const resultadoEdad = document.getElementById("resultado-edad");
    
    if (añoNac && !isNaN(añoNac) && añoNac > 0) {
        const añoAct = new Date().getFullYear();
        const age = añoAct - añoNac;

        if (age >= 18) {
            resultadoEdad.textContent = `Tienes ${age} años. Eres mayor de edad.`;
        } else {
            resultadoEdad.textContent = `Tienes ${age} años. Eres menor de edad.`;
        }
    } else {
        resultadoEdad.textContent = "Por favor, ingresa un año de nacimiento válido.";
    }
});