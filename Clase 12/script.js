function saludar() {
  var nombre = prompt("Por favor, ingresa tu nombre:");

  if (nombre === null || nombre === "") {
    alert("Por favor, ingresa tu nombre para continuar.");
    window.location.reload();
  } else {
    alert("¡Bienvenido, " + nombre + "!");
    document.write("<h1>¡Hola, " + nombre + "!</h1>");
  }
}

saludar();
