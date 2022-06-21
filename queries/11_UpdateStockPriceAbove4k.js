//Cambiar el stock a cero de los productos con precios mayores a 4000 pesos. 

use ecommerce;

let stock_value = 0;
let price_value = 4000;

print("Cambiar el stock a ",stock_value," de los productos con precios mayores a",price_value);
db.productos.updateMany( { price: {$gt: price_value}},  { $set: {  stock: stock_value } } );