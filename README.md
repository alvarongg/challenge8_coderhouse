# challenge8_coderhouse

## Consigna

*   Consigna: Utilizando Mongo Shell, crear una base de datos llamada ecommerce que contenga dos colecciones: mensajes y productos.

* 1 - Agregar 10 documentos con valores distintos a las colecciones mensajes y productos. El formato de los documentos debe estar en correspondencia con el que venimos utilizando en el entregable con base de datos MariaDB. 

* 2 - Definir las claves de los documentos en relación a los campos de las tablas de esa base. En el caso de los productos, poner valores al campo precio entre los 100 y 5000 pesos(eligiendo valores intermedios, ej: 120, 580, 900, 1280, 1700, 2300, 2860, 3350, 4320, 4990). 

* 3 - Listar todos los documentos en cada colección.

* 4 - Mostrar la cantidad de documentos almacenados en cada una de ellas.

* 5 - Realizar un CRUD sobre la colección de productos:
    * a - Agregar un producto más en la colección de productos 
    * b - Realizar una consulta por nombre de producto específico:
        * Listar los productos con precio menor a 1000 pesos.
        * Listar los productos con precio entre los 1000 a 3000 pesos.
        * Listar los productos con precio mayor a 3000 pesos.
        * Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
    * c - Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.
    * d - Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.
    * e - Borrar los productos con precio menor a 1000 pesos 
* 6 - Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.

## Nota 1 - Docker 

Utilice docker para ejecutar la base de datos mongodb con el objetivo de hacer lo mas portable posible el proyecto.

Para instalar docker seguir estos manuales:

* [Instalar en Ubuntu](https://acloudguru.com/hands-on-labs/installing-and-configuring-the-docker-engine?utm_campaign=11244863417&utm_source=google&utm_medium=cpc&utm_content=469352928666&utm_term=_&adgroupid=115625160932&gclid=CjwKCAjw46CVBhB1EiwAgy6M4ikP_hcA42mlznnGgVem1iP6uS0lUM9py3NXVlILLA5IW9GyOHT7GBoCQM8QAvD_BwE)
* [Instalar en Windows](https://docs.docker.com/desktop/windows/install/)


Para limpiar las imagenes de docker se [debe seguir este manual](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes-es)


## Nota2 - Mongo-Express :  

Para poder visualizar la base sin tener que ingresar a ninguna herramienta agregue el contenedor [MongoExpress](https://github.com/mongo-express/mongo-express), que levanta una web donde podemos visualizar los datos en el motor facilmente. Este servicio se expone en el puerto 8081 y se levanta al mismo tiempo que la base de mongo ya que estan en el mismo docker-compose.

Para ingresar a mongoExpress http://localhost:8081


## Nota3 Configuracion del Docker-compose.yml:

Esta es la configuracion que tiene el docker-compose.yml

### Variables de entorno Mongodb
```yml
    environment:
      MONGO_INITDB_ROOT_USERNAME: root #nombre del usuario ROOT
      MONGO_INITDB_ROOT_PASSWORD: asd456 #password del usuario ROOT
      MONGO_INITDB_DATABASE: ecommerce #base de datos inicial (opcional)
```

### Puerto que expone el contenedor Mongodb
```yml
 ports:
      - 27017:27017  
```
### Volumenes del contenedor Mongodb
```yml
    volumes:
      - ../data/db:/data/db #Sincroniza los archivos de la base
      - ./init-mongo.js:/docker-entrypoint-initdb.d/mongo-init.js:ro #script de inicializacion de la base de datos (creacion del usuario admin para ecommerce y creacion de las colecciones [mensajes y productos])
      - ../queries:/queries # si no queremos ejecutar los scritps en el ambiente local, podemos ejecutarlos desde dentro del contenedor, yo utilize esta opcion para no instalar el cliente de mongo en mi pc
```    


### Script de inicializacion de la base de datos:

```js
db.createUser(
    {
        user: "adminEC",
        pwd: "adminEC",
        roles: [
            {
                role: "readWrite",
                db: "ecommerce"
            }
        ]
    }
);
db.createCollection("mensajes");
db.createCollection("productos"); 

```

### Configuracion de Mongo-Express
```yml
  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081  ##Puerto que expone
    environment:  ##Informacion para que se conecte al contenedor de mongodb creado anteriormente (el usuario y pass tienen que ser los de root)
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: asd456
      ME_CONFIG_MONGODB_URL: mongodb://root:asd456@mongo:27017/
```





## Despliegue 📦


* Inicializacion de base MongoDB (se expone el puerto 27017) con docker :whale:
```bash
npm run mongo-docker-up
```

* Ingreso al contenedor de mongodb
```bash
docker exec -it mongodb bash
```

* Acceso a las consultas guardadas en scritps ( en la seccion consultas se pueden ver todos los commandos y sus usos)
```bash
cd queries
```

* Destruccion del contenedor de MongoDB y Mongo Express una vez que terminamos de trabajar :goberserk:
```bash
npm run mongo-docker-kill
```

##  Consultas :

* 1 - Agregar 10 documentos con valores distintos a las colecciones mensajes y productos. El formato de los documentos debe estar en correspondencia con el que venimos utilizando en el entregable con base de datos MariaDB. 

```bash
mongo -u root -p asd456 --authenticationDatabase admin <1_createDBandInsertData.js 
```

* 3 - Listar todos los documentos en cada colección.
* 4 - Mostrar la cantidad de documentos almacenados en cada una de ellas.

```bash
mongo -u root -p asd456 --authenticationDatabase admin <2_MuestraMensajes.js
```
```bash
mongo -u root -p asd456 --authenticationDatabase admin <3_MuestraProductos.js
```


 * a - Agregar un producto más en la colección de productos 

```bash
mongo -u root -p asd456 --authenticationDatabase admin <4_addProducto.js
```


* b - Realizar una consulta por nombre de producto específico:

```bash
mongo -u root -p asd456 --authenticationDatabase admin <5_findProductoByName.js      
```

* Listar los productos con precio menor a 1000 pesos.
 
```bash
mongo -u root -p asd456 --authenticationDatabase admin <6_findLess1000.js    
```
* Listar los productos con precio entre los 1000 a 3000 pesos.
     
```bash
mongo -u root -p asd456 --authenticationDatabase admin <7_findPriceBw1kand3k.js      
```
* Listar los productos con precio mayor a 3000 pesos.

```bash
mongo -u root -p asd456 --authenticationDatabase admin <8_findPriceAbove3k.js    
```

* Realizar una consulta que traiga sólo el nombre del tercer producto más barato.

```bash
mongo -u root -p asd456 --authenticationDatabase admin <9_find3thCheapProd.js       
```

* c - Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.

```bash
mongo -u root -p asd456 --authenticationDatabase admin <10_UpdateStockTo100.js       
```

* d - Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.

```bash
mongo -u root -p asd456 --authenticationDatabase admin <11_UpdateStockPriceAbove4k.js
```

* e - Borrar los productos con precio menor a 1000 pesos 

```bash
mongo -u root -p asd456 --authenticationDatabase admin <12_DeletePriceLess1k.js
```


* 6 - Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.

```bash
mongo -u root -p asd456 --authenticationDatabase admin <13_createUserReader.js 
```

* Pruebas con el usuario pepe

```bash
mongo -u pepe -p asd456 --authenticationDatabase admin <3_MuestraProductos.js
```

```bash
mongo -u pepe -p asd456 --authenticationDatabase admin <10_UpdateStockTo100.js
```