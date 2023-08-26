// Variable para el pedido del cliente (carne, pescado, verdura)
var pedido = "carne";

// Variable para la bebida ofrecida
var bebida;

// Condicional SWITCH para determinar la bebida según el pedido
switch (pedido) {
  case "carne":
    bebida = "vino tinto";
    break;
  case "pescado":
    bebida = "vino blanco";
    break;
  case "verdura":
    bebida = "agua";
    break;
  default:
    console.log("Elija carne, pescado o verdura");
    break;
}

// Mostrar la bebida ofrecida
if (bebida) {
  console.log("Se le ofrece como bebida: " + bebida);
}
