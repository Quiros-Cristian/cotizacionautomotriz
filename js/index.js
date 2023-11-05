function solicitarNombreDeUsuario() {
    let nombreIngresado = prompt("Ingrese su nombre: ");
    let apellidoIngresado = prompt("Ingrese su apellido: ");
    let devolucion = ("Bienvenido al cotizador de seguros " + nombreIngresado + " " + apellidoIngresado);

    alert(devolucion);
}

solicitarNombreDeUsuario();

let continuar;

do{

    let vehiculo = prompt("¿Cual es la marca de su vehiculo? volkswagen/chevrolet/ford")



if (vehiculo === "volkswagen") {
    alert("su vehiculo es un volkswagen");

    let modelo = prompt("¿cual es el modelo de su vehiculo? gol/ciroco");

    if (modelo === "gol") {
        alert("el costo del gol es de $10.000 por mes");
    } else if (modelo === "ciroco") {
        alert("el costo del ciroco es de $50.000 por mes");
    }

} else if (vehiculo === "chevrolet") {
    alert("su vehiculo es un chevrolet");

    let modelo = prompt("¿cual es el modelo de su vehiculo? corvete/f100");

    if (modelo === "corvete") {
        alert("el costo del corvete es de $40.000 por mes");
    } else if (modelo === "f100") {
        alert("el costo del f100 es de $10.000 por mes");
    }

} else if (vehiculo === "ford") {
    alert("su vehiculo es un ford");

    let modelo = prompt("¿cual es el modelo de su vehiculo? focus/mustang");

    if (modelo === "focus") {
        alert("el costo del focus es de $10.000 por mes");
    } else if (modelo === "mustang") {
        alert("el costo del mustang es de $30.000 por mes");
    }
}
else {
    alert("no encuentro su vehiculo");
}

   continuar = prompt ("¿desea realizar una nueva cotizacion? SI/NO");
}while(continuar === "si");