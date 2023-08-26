var nombre = "Agustin";
var apellido = "Natali";

var nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

var num1 = 10;
var num2 = 20;

var suma = num1 + num2;

console.log(suma);

var numsuma = suma + 50;

console.log(numsuma);

//si sumamos un numero con un string, el resultado es un string

var sumastring = "hola" + 10;

console.log(sumastring);

document.write("<p>Nombre Completo: " + nombreCompleto + "</p>");
document.write("<p>Suma: " + suma + "</p>");
document.write("<p>Suma: " + numsuma + "</p>");
document.write("<p>Suma: " + sumastring + "</p>");
///////////////////////////////////////////////////////////////////

var topping;
var precio;
var precioFinal;

var helado = 10;

topping = "KitKat";

if (topping === "Oreo") {
  precio = 10;
} else if (topping === "KitKat") {
  precio = 15;
} else if (topping === "Kinder") {
  precio = 25;
} else {
  console.log("No tenemos este topping");
}

if (precio !== null) {
  precioFinal = helado + precio;
  console.log("El helado cuesta $" + precioFinal);
}

document.write("<p>El helado cuesta $" + precioFinal + "</p>");

//////////////////////////////////////////////////////////////////

var menu = ["carne", "pescado", "verdura"];

document.write("Elija carne, pescado o verdura.<br>");

for (var i = 0; i < menu.length; i++) {
  var eleccion = menu[i];

  switch (eleccion) {
    case "carne":
      document.write(
        "Usted ha elegido carne. ¿Desea vino tinto como bebida?<br>"
      );
      break;
    case "pescado":
      document.write(
        "Usted ha elegido pescado. ¿Desea vino blanco como bebida?<br>"
      );
      break;
    case "verdura":
      document.write("Usted ha elegido verdura. ¿Desea agua como bebida?<br>");
      break;
    default:
      document.write("Elija carne, pescado o verdura.<br>");
      break;
  }
}

var numero = 1;
while (numero < 11) {
  document.write(numero + " es más chico que 11.<br>");
  numero++;
}
