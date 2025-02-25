// Variables útiles
var precio_base = 2000;
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var recargo = 0;
var recargo_total = 0;
var precio_final = 0;

while (true) {
    // Ingreso de datos por parte del usuario
    var nombre = prompt("Ingrese su nombre, por favor");
    var edad = prompt("¿Cuántos años tiene? Ingrese solamente números ");

    // Convertir la edad a número (esto es crucial para la comparación)
    var edad_numero = parseInt(edad);

    // Verificación si el asegurado tiene menos de 18 años
    if (edad_numero < 18) {
        alert("El asegurado debe ser mayor de edad (18 años o más). El programa se detiene.");
        break; // Detenemos el ciclo si el asegurado es menor de 18 años
    }

    var casado = prompt("¿Está casado actualmente? (Sí/No)");

    var edad_conyuge;
    if ("SI" == casado.toUpperCase()) {
        edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
    }

    var edad_conyuge_numero = 0;
    if ("SI" == casado.toUpperCase()) {
        edad_conyuge_numero = parseInt(edad_conyuge);
    }

    var hijos = prompt("¿Tiene hijos o hijas? (Sí/No)");

    var cantidad_hijos = 0;
    if (hijos.toUpperCase() === "SI") {
        cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene el asegurado?"));
    }

    // Recargos basados en la edad del asegurado
    if (edad_numero >= 18 && edad_numero < 25) {
        recargo = precio_base * edad_18;
        recargo_total += recargo;
    } else if (edad_numero >= 25 && edad_numero < 50) {
        recargo = precio_base * edad_25;
        recargo_total += recargo;
    } else if (edad_numero >= 50) {
        recargo = precio_base * edad_50;
        recargo_total += recargo;
    }

    // Recargo por la edad del conyuge
    if (casado.toUpperCase() === "SI") {
        var recargoConyuge = 0;
        if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
            recargoConyuge = precio_base * 0.1; // Recargo 10%
        } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
            recargoConyuge = precio_base * 0.2; // Recargo 20%
        } else if (edad_conyuge_numero >= 50) {
            recargoConyuge = precio_base * 0.3; // Recargo 30%
        }
        recargo_total += recargoConyuge;
    }

    // Recargo por la cantidad de hijos
    var recargoHijos = 0;
    if (cantidad_hijos > 0) {
        recargoHijos = precio_base * 0.2 * cantidad_hijos;
        recargo_total += recargoHijos;
    }

    // Recargos por propiedades y salarios
    var cantidad_propiedades = parseInt(prompt("¿Cuántas propiedades tiene el asegurado?"));
    var salario = parseFloat(prompt("¿Cuál es su salario mensual en quetzales?"));

    var recargoPropiedades = precio_base * 0.35 * cantidad_propiedades;
    var recargoSalario = salario * 0.05;

    recargo_total += recargoPropiedades + recargoSalario;

    // Calcular el precio final
    precio_final = precio_base + recargo_total;

    // Mostrar el resultado
    alert("Para el asegurado " + nombre);
    alert("El recargo total será de: Q" + recargo_total.toFixed(2));
    alert("El precio final de la cotización será de: Q" + precio_final.toFixed(2));

    // Preguntar si desea hacer otra cotización
    var continuar = prompt("¿Desea realizar otra cotización? (Ingrese 'Salir' para terminar, cualquier otra tecla para continuar)");
    if (continuar.toUpperCase() === "SALIR") {
        break; // Si el usuario ingresa 'Salir', se termina el ciclo
    }

    // Restablecer el recargo total para la siguiente cotización
    recargo_total = 0;
}
