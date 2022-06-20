
use ecommerce;
print("Listo todos los productos");
db.productos.find().pretty();

print("Cantidad de productos cargados:");
db.productos.find().count();