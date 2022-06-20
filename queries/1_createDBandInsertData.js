
use ecommerce;

print("Insert mensajes");
db.mensajes.insertOne({author: 'author1', text: 'text1', date: new Date() });
db.mensajes.insertOne({author: 'author2', text: 'text2', date: new Date() });
db.mensajes.insertOne({author: 'author3', text: 'text3', date: new Date() });
db.mensajes.insertOne({author: 'author4', text: 'text4', date: new Date() });
db.mensajes.insertOne({author: 'author5', text: 'text5', date: new Date() });
db.mensajes.insertOne({author: 'author6', text: 'text6', date: new Date() });
db.mensajes.insertOne({author: 'author7', text: 'text7', date: new Date() });
db.mensajes.insertOne({author: 'author8', text: 'text8', date: new Date() });
db.mensajes.insertOne({author: 'author9', text: 'text9', date: new Date() });
db.mensajes.insertOne({author: 'author10', text: 'text10', date: new Date() });

print("Insert productos");
db.productos.insertMany([
    {title: 'Producto1', price: 120, stock: 11, thumbnail: 'http://thubnail'},
    {title: 'Producto2', price: 580, stock: 12, thumbnail: 'http://thubnail'},
    {title: 'Producto3', price: 900, stock: 13,thumbnail: 'http://thubnail'},
    {title: 'Producto4', price: 1280, stock: 14, thumbnail: 'http://thubnail'},
    {title: 'Producto5', price: 1700, stock: 15, thumbnail: 'http://thubnail'},
    {title: 'Producto6', price: 2300, stock: 16, thumbnail: 'http://thubnail'},
    {title: 'Producto7', price: 2860, stock: 17,thumbnail: 'http://thubnail'},
    {title: 'Producto8', price: 3350, stock: 18, thumbnail: 'http://thubnail'},
    {title: 'Producto9', price: 4320, stock: 19,thumbnail: 'http://thubnail'},
    {title: 'Producto10', price: 4990, stock: 20, thumbnail: 'http://thubnail'},
 ] );




