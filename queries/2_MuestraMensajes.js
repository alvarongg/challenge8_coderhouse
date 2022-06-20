
use ecommerce;
print("Listo todos los mensajes");
db.mensajes.find().pretty()

print("Cantidad de mensajes cargados:");
db.mensajes.find().count();