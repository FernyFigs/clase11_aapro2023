// Variables
var helado = 30; // Precio del helado
var topping = "Oreo"; // Topping del helado (Oreo, KitKat, Kinder)

var precio; // Precio del topping
var precioFinal; // Precio total a mostrar al final

// Condicional IF para determinar el precio del topping
if (topping === "Oreo") {
  precio = 10;
} else if (topping === "KitKat") {
  precio = 15;
} else if (topping === "Kinder") {
  precio = 25;
} else {
  console.log("No tenemos este topping");
  precio = 0;
}

// Calculo del precio final
precioFinal = helado + precio;

// Precio final
console.log("El helado cuesta $" + precioFinal);
