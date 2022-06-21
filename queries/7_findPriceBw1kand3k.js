//Listar los productos con precio entre los 1000 a 3000 pesos.
use ecommerce;

let value1 = 1000;
let value2 = 3000;

print("Listar los productos con precio entre los ",value1," pesos a ",value2," pesos.");
db.productos.find( {price: {$gte: value1,$lt: value2}});