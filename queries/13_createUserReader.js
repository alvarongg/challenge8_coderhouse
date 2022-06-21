//Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.
use admin
db.createUser(
  {
    user: "pepe",
    pwd: "asd456",
    roles: [ { role: "read", db: "ecommerce" } ],
    mechanisms:[  
     "SCRAM-SHA-1"
    ]
  }
)
