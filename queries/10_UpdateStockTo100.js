//Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100


use ecommerce;

let value = 100;

print("Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de",value);
db.productos.updateMany( { price: {$gte: 0}},  { $set: {  stock: value } } );