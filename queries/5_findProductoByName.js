use ecommerce;

let nombre = 'NuevoProducto';

print("Busca producto: ",nombre);
db.productos.find( {title: nombre});