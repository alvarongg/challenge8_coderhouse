use ecommerce;

let nombre = 'NuevoProducto';
let precio = 6;
let cantidad = 11;
let thumbnailAddress = 'http://thubnail';

print("Inserta un producto");
db.productos.insertOne( {title: nombre, price: precio, stock: cantidad, thumbnail: thumbnailAddress});