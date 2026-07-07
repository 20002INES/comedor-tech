function validarEntrada() {
    const ticket = document.getElementById("ticket");
    const mensaje = document.getElementById("mensaje");
    const estadoTicket = document.getElementById("estado-ticket");

    if (!ticket || !mensaje || !estadoTicket) {
        return;
    }

    if (ticket.value === "TICKET-221045-2026") {
        mensaje.innerHTML = "✓ CONTROL DE ACCESO EXITOSO: Permita el ingreso del comensal y entregue la bandeja de alimentos.";
        estadoTicket.innerHTML = "✓ VÁLIDO - SIN SERVIR";
    } else {
        mensaje.innerHTML = "✗ TICKET INVÁLIDO: No se permite el ingreso del estudiante.";
        estadoTicket.innerHTML = "✗ TICKET INVÁLIDO";
    }
}

function registrarServido() {
    const mensaje = document.getElementById("mensaje");
    const estadoTicket = document.getElementById("estado-ticket");

    if (!mensaje || !estadoTicket) {
        return;
    }

    estadoTicket.innerHTML = "✓ ATENDIDO / SERVIDO";
    mensaje.innerHTML = "✓ REGISTRO COMPLETADO: El estudiante fue atendido correctamente.";
}

function iniciarSesion(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario === "" || password === "") {
        alert("Complete todos los campos.");
        return;
    }

    alert("Inicio de sesión correcto. Bienvenido a COMEDOR-TECH.");
    window.location.href = "index.html";
}

function generarTicket() {
    const ticketGenerado = document.getElementById("ticket-generado");

    if (!ticketGenerado) {
        return;
    }

    ticketGenerado.innerHTML = "✓ Ticket generado correctamente: TICKET-221045-2026";
}