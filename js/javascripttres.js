// Crear un array de datos
const arrayverduras = ["lechuga", "tomate", "papa", "repollo", "berenjena"];

// Mostrar los elementos del array antes de agregar uno nuevo
console.log("Antes de agregar una verdura:", arrayverduras);

// Usar un bucle for para recorrer el array

for (let i = 0; i < arrayverduras.length; i++) {
  console.log("verdura: " + arrayverduras[i]);
}

// Agregar un nuevo elemento al array (uso el método push)
arrayverduras.push("cebolla");

// Mostrar los elementos del array después de agregar uno nuevo
console.log("Después de agregar una verdura:", arrayverduras);

// Usar otro bucle for para recorrer el array actualizado
for (var i = 0; i < arrayverduras.length; i++) {
  console.log("verdura →" + i + ": " + arrayverduras[i]);
}
