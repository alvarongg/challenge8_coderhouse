//Listar los productos con precio mayor a 3000 pesos.

use ecommerce;

let value = 3000;

print("Listar los productos con precio mayor a",value," pesos");
db.productos.find( {price: {$gt: value}});