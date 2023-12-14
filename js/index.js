function solicitarNombreDeUsuario() {
    let nombreIngresado = prompt("Ingrese su nombre: ");
    let apellidoIngresado = prompt("Ingrese su apellido: ");
    let devolucion = ("Bienvenido al cotizador de seguros " + nombreIngresado + " " + apellidoIngresado);

    alert(devolucion);
}

solicitarNombreDeUsuario();

let continuar;

do {

    let vehiculo = prompt("¿Cual es la marca de su vehiculo? volkswagen/chevrolet/ford")



    if (vehiculo === "volkswagen") {
        alert("su vehiculo es un volkswagen");

        let modelo = prompt("¿cual es el modelo de su vehiculo? gol/ciroco");

        if (modelo === "gol") {
            alert("el costo del gol es de $10.000 por mes");            
            const CARRITO = [
                 { vehiculo: 'gol', precio: 10.000 }
            ]
            
            let precioTotal = CARRITO.reduce(function (acumulador, vehiculo) {
                return acumulador + vehiculo.precio;
            }, 0)
        
            alert(`el precio total de las cotizaciones es de: ${precioTotal}`);
        } else if (modelo === "ciroco") {
            alert("el costo del ciroco es de $50.000 por mes");
            const CARRITO = [
                { vehiculo: 'ciroco', precio: 50.000 }
           ]
           
           let precioTotal = CARRITO.reduce(function (acumulador, vehiculo) {
               return acumulador + vehiculo.precio;
           }, 0)
       
           alert(`el precio total de las cotizaciones es de: ${precioTotal}`);
        }

    } else if (vehiculo === "chevrolet") {
        alert("su vehiculo es un chevrolet");

        let modelo = prompt("¿cual es el modelo de su vehiculo? corvete/f100");

        if (modelo === "corvete") {
            alert("el costo del corvete es de $40.000 por mes");
            const CARRITO = [
                { vehiculo: 'corvete', precio: 40.000 }
           ]
           
           let precioTotal = CARRITO.reduce(function (acumulador, vehiculo) {
               return acumulador + vehiculo.precio;
           }, 0)
       
           alert(`el precio total de las cotizaciones es de: ${precioTotal}`);
        } else if (modelo === "f100") {
            alert("el costo del f100 es de $10.000 por mes");
            const CARRITO = [
                { vehiculo: 'f100', precio: 10.000 }
           ]
           
           let precioTotal = CARRITO.reduce(function (acumulador, vehiculo) {
               return acumulador + vehiculo.precio;
           }, 0)
       
           alert(`el precio total de las cotizaciones es de: ${precioTotal}`);
        }

    } else if (vehiculo === "ford") {
        alert("su vehiculo es un ford");

        let modelo = prompt("¿cual es el modelo de su vehiculo? focus/mustang");

        if (modelo === "focus") {
            alert("el costo del focus es de $10.000 por mes");
            const CARRITO = [
                { vehiculo: 'focus', precio: 10.000 }
           ]
           
           let precioTotal = CARRITO.reduce(function (acumulador, vehiculo) {
               return acumulador + vehiculo.precio;
           }, 0)
       
           alert(`el precio total de las cotizaciones es de: ${precioTotal}`);
        } else if (modelo === "mustang") {
            alert("el costo del mustang es de $30.000 por mes");
            const CARRITO = [
                { vehiculo: 'mustang', precio: 30.000 }
           ]
           
           let precioTotal = CARRITO.reduce(function (acumulador, vehiculo) {
               return acumulador + vehiculo.precio;
           }, 0)
       
           alert(`el precio total de las cotizaciones es de: ${precioTotal}`);
        }
    }
    else {
        alert("no encuentro su vehiculo");
    }

    

    continuar = prompt("¿desea realizar una nueva cotizacion? SI/NO");
} while (continuar === "si");

const botonDark = document.getElementById("botonDark");

botonDark.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(documentbody.classList.contains("dark")){
        localStorage.setItem("modo","dark");
    }else{
        localStorage.setItem("modo","claro")
    }
})



