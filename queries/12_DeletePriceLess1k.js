//Borrar los productos con precio menor a 1000 pesos 

use ecommerce;

let value = 1000;

print("Borrar los productos con precio menor a ",value," pesos");
db.productos.deleteMany( { price: {$lt: value}} );