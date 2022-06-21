//Listar los productos con precio menor a 1000 pesos.
use ecommerce;

let value = 1000;

print("Listar los productos con precio menor a ",value," pesos");
db.productos.find( {price: {$lt: value}});