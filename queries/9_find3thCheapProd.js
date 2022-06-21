//Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
use ecommerce;

let value1 = 1000;
let value2 = 3000;

print("Realizar una consulta que traiga sólo el nombre del tercer producto más barato.");
db.productos.find().sort({price:1}).skip(2).limit(1);