# API con Endpoints

Este es un repositorio donde veremos el manejo de una farmacia, este sistema de gestión que me permita gestionar las ventas y compras, interactuar con proveedores, empleados y pacientes, generar informes de ventas y caducidad de medicamentos. Es esencial que este software pase por un proceso de análisis de requerimientos, diseño, implementación, pruebas, y eventual retiro, garantizando en todo momento la adaptabilidad, confiabilidad y eficiencia para las operaciones diarias de la farmacia.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- Node.js
- MongoDB: Base de datos NoSQL de código abierto, orientada a documentos y altamente escalable. Almacena datos en formato JSON y es ampliamente utilizado para aplicaciones web y móviles.

Además de esto, es necesario mencionar que los paquetes usados fueron las siguientes:

- dotenv: Para usar variables de entorno.
- express: Para realizar el montaje del servidor y de la api como tal.
- jose: Para el uso del Json Web Token (JWT).
- mongodb: Para poder hacer una conexión a nuestra base de datos.
- nodemon: Para el lanzamiento del servidor.
- express-validator: Para el DTO de los datos que entran.
- express-routes-versioning: Para el manejo de versiones en la api.

## Configuración

1.  Clona este repositorio en tu máquina local.
1.  Abre una terminal en la carpeta raíz del proyecto.
1.  Ejecuta el siguiente comando para instalar las dependencias necesarias:

        npm install

1.  Crea un archivo .env en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

        MY_CONFIG={"user":"admin","password":"admin123","database": "facturacionCampus_EmilyNieves"}
        MY_SERVER={"hostname":"127.20.20.1", "port":5000}
        JWT_PRIVATE_KEY="claves3cret4"

    ###### Asegurate de cambiar NOMBRE_DB y demás configuraciones según tus necesidades

## Base de datos

Para obtener la base de datos, ejecuta el archivo `db.mongodb` que esta ubicado en la carpeta utils dentro de la carpeta src. Ya sea en alguna extensión de tu editor de texto que te permita hacer conexión a tu base local o en tu programa de preferencia puedes copiar y pegar el script.
**Recuerda que para usar tu propio cluster, debes cambiar el link ubicado en _src/utils/connect.js_, si usaras el cluster que trae por defecto, no es necesario correr el script**

## Ejecución

Para ejecutar correctamente el servidor debes asegurarte de tener `nodemon`, ya teniendo esta dependencia, solo escribes en la consola:

        npm run dev

## Autorización

Para ejecutar correctamente los endpoints, debes obtener el token de cada tabla antes de hacer la consulta, por lo que en el apartado de los endpoints dejaremos escrita la url a ejecutar antes, y debes copiar el token en el header de autorización.

## Endpoints

Para este proyecto se desarrollaron los siguiente endpoints diseñados para manipular la base de datos esperando los parametros por el body de la petición.

RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`.

Los datos acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

1.  Obtener todos los medicamentos con menos de 50 unidades en stock

    - Authorization: `http://127.20.20.1:5000/token/inventarios`
    - URL: `http://127.20.20.1:5000/api/get/obtenerVentasParacetamol`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```json
      {
        "message": "se han encontrado 1 resultados",
        "result": [
          {
            "totalVentas": 2
          }
        ]
      }
      ```

1.  Listar los proveedores con su información de contacto en medicamentos

    - Authorization: `http://127.20.20.1:5000/token/medicamentos`
    - URL: `http://127.20.20.1:5000/api/get/obtenerProveedores`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```json
      {
        "message": "se han encontrado 7 resultados",
        "result": [
          {
            "_id": "64f748606f3e6be503d3bf0c",
            "DatosProveedor": {
              "NIT": 741852987,
              "RazonSocial": "Proveedor 1",
              "Direccion": "Calle 100 #36-42",
              "Telefono": 3161616111
            },
            "Medicamento": {
              "IdMedicamento": 1,
              "NombreComercial": "Paracetamol",
              "Lote": 3161616111,
              "FechaCaducidad": "2024-10-17T00:00:00.000Z",
              "PrecioUnitario": 31
            }
          },
          {
            "_id": "64f748606f3e6be503d3bf0d",
            "DatosProveedor": {
              "NIT": 852741369,
              "RazonSocial": "Proveedor 2",
              "Direccion": "Calle 100 #36-42",
              "Telefono": 3161616111
            },
            "Medicamento": {
              "IdMedicamento": 2,
              "NombreComercial": "Buscapina",
              "Lote": 3161616111,
              "FechaCaducidad": "2023-12-25T00:00:00.000Z",
              "PrecioUnitario": 41
            }
          },
          {
            "_id": "64f748606f3e6be503d3bf0e",
            "DatosProveedor": {
              "NIT": 321654789,
              "RazonSocial": "Proveedor 3",
              "Direccion": "Calle 100 #36-42",
              "Telefono": 3161616111
            },
            "Medicamento": {
              "IdMedicamento": 3,
              "NombreComercial": "Cefalexina",
              "Lote": 3161616111,
              "FechaCaducidad": "2024-08-18T00:00:00.000Z",
              "PrecioUnitario": 35
            }
          },
          {
            "_id": "64f748606f3e6be503d3bf0f",
            "DatosProveedor": {
              "NIT": 741852963,
              "RazonSocial": "Proveedor 4",
              "Direccion": "Calle 100 #36-42",
              "Telefono": 3161616111
            },
            "Medicamento": {
              "IdMedicamento": 4,
              "NombreComercial": "Noxpirin",
              "Lote": 3161616111,
              "FechaCaducidad": "2024-05-20T00:00:00.000Z",
              "PrecioUnitario": 51
            }
          },
          {
            "_id": "64f748606f3e6be503d3bf10",
            "DatosProveedor": {
              "NIT": 741852987,
              "RazonSocial": "Proveedor 1",
              "Direccion": "Calle 100 #36-42",
              "Telefono": 3161616111
            },
            "Medicamento": {
              "IdMedicamento": 5,
              "NombreComercial": "Pax Noche",
              "Lote": 3161616111,
              "FechaCaducidad": "2023-03-19T00:00:00.000Z",
              "PrecioUnitario": 80
            }
          },
          {
            "_id": "64f748606f3e6be503d3bf11",
            "DatosProveedor": {
              "NIT": 741852987,
              "RazonSocial": "Proveedor 1",
              "Direccion": "Calle 100 #36-42",
              "Telefono": 3161616111
            },
            "Medicamento": {
              "IdMedicamento": 6,
              "NombreComercial": "Complejo B",
              "Lote": 3161616111,
              "FechaCaducidad": "2023-07-10T00:00:00.000Z",
              "PrecioUnitario": 79
            }
          },
          {
            "_id": "64f748606f3e6be503d3bf12",
            "DatosProveedor": {
              "NIT": 741852963,
              "RazonSocial": "Proveedor 4",
              "Direccion": "Calle 100 #36-42",
              "Telefono": 3161616111
            },
            "Medicamento": {
              "IdMedicamento": 7,
              "NombreComercial": "Vitamina C",
              "Lote": 3161616111,
              "FechaCaducidad": "2024-06-06T00:00:00.000Z",
              "PrecioUnitario": 74
            }
          }
        ]
      }
      ```

1.  Medicamentos comprados al 'Proveedor 1'

    - Authorization: `http://127.20.20.1:5000/token/medicamentos`
    - URL: `http://127.20.20.1:5000/api/get/obtenerMedicamentosProveedor`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```json
      {
        "message": "se han encontrado 3 resultados",
        "result": [
          {
            "_id": "64f748606f3e6be503d3bf0c",
            "Medicamento": {
              "IdMedicamento": 1,
              "NombreComercial": "Paracetamol",
              "Lote": 3161616111,
              "FechaCaducidad": "2024-10-17T00:00:00.000Z",
              "PrecioUnitario": 31
            },
            "NITProveedor": 741852987,
            "RazonSocialProveedor": "Proveedor 1",
            "DireccionProveedor": "Calle 100 #36-42",
            "TelefonoProveedor": 3161616111
          },
          {
            "_id": "64f748606f3e6be503d3bf10",
            "Medicamento": {
              "IdMedicamento": 5,
              "NombreComercial": "Pax Noche",
              "Lote": 3161616111,
              "FechaCaducidad": "2023-03-19T00:00:00.000Z",
              "PrecioUnitario": 80
            },
            "NITProveedor": 741852987,
            "RazonSocialProveedor": "Proveedor 1",
            "DireccionProveedor": "Calle 100 #36-42",
            "TelefonoProveedor": 3161616111
          },
          {
            "_id": "64f748606f3e6be503d3bf11",
            "Medicamento": {
              "IdMedicamento": 6,
              "NombreComercial": "Complejo B",
              "Lote": 3161616111,
              "FechaCaducidad": "2023-07-10T00:00:00.000Z",
              "PrecioUnitario": 79
            },
            "NITProveedor": 741852987,
            "RazonSocialProveedor": "Proveedor 1",
            "DireccionProveedor": "Calle 100 #36-42",
            "TelefonoProveedor": 3161616111
          }
        ]
      }
      ```

1.  Obtener recetas médicas emitidas después del 1 de enero de 2023

    - Authorization: `http://127.20.20.1:5000/token/recetas`
    - URL: `http://127.20.20.1:5000/api/get/obtenerMedicamentosProveedor`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```json
      {
        "message": "se han encontrado 5 resultados",
        "result": [
          {
            "_id": "64f748636f3e6be503d3bf20",
            "Receta": 1,
            "Fecha": "2023-01-03T05:00:00.000Z",
            "Paciente": "Emily Nieves",
            "NombreMedico": "Emily",
            "ApellidoMedico": "Nieves",
            "Medicamentos": {
              "NombreMedicamento": "Paracetamol"
            }
          },
          {
            "_id": "64f748636f3e6be503d3bf21",
            "Receta": 2,
            "Fecha": "2023-01-03T05:00:00.000Z",
            "Paciente": "Tatiana Ramirez",
            "NombreMedico": "Tatiana",
            "ApellidoMedico": "Martínez",
            "Medicamentos": {
              "NombreMedicamento": "Paracetamol"
            }
          },
          {
            "_id": "64f748636f3e6be503d3bf21",
            "Receta": 2,
            "Fecha": "2023-01-03T05:00:00.000Z",
            "Paciente": "Tatiana Ramirez",
            "NombreMedico": "Tatiana",
            "ApellidoMedico": "Martínez",
            "Medicamentos": {
              "NombreMedicamento": "Buscapina"
            }
          },
          {
            "_id": "64f748636f3e6be503d3bf24",
            "Receta": 5,
            "Fecha": "2023-01-03T05:00:00.000Z",
            "Paciente": "Santiago Sanchez",
            "NombreMedico": "David",
            "ApellidoMedico": "Hernandez",
            "Medicamentos": {
              "NombreMedicamento": "Buscapina"
            }
          },
          {
            "_id": "64f748636f3e6be503d3bf25",
            "Receta": 6,
            "Fecha": "2023-01-03T05:00:00.000Z",
            "Paciente": "David Hernandez",
            "NombreMedico": "Camilo",
            "ApellidoMedico": "Serrano",
            "Medicamentos": {
              "NombreMedicamento": "Pax Noche"
            }
          }
        ]
      }
      ```

1.  Total de ventas del medicamento 'Paracetamol'

    - Authorization: `http://127.20.20.1:5000/token/facturaVenta`
    - URL: `http://127.20.20.1:5000/api/get/obtenerVentasParacetamol`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```json
      {
        "message": "se han encontrado 1 resultados",
        "result": [
          {
            "totalVentas": 2
          }
        ]
      }
      ```

1.  Medicamentos que caducan antes del 1 de enero de 2024

    - Authorization: `http://127.20.20.1:5000/token/medicamentos`
    - URL: `http://127.20.20.1:5000/api/get/obtenerMedicamentosCaducan2023`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```json
      {
        "message": "se han encontrado 3 resultados",
        "result": [
          {
            "_id": "64f748606f3e6be503d3bf0d",
            "Medicamento": {
              "IdMedicamento": 2,
              "NombreComercial": "Buscapina",
              "Lote": 3161616111,
              "FechaCaducidad": "2023-12-25T00:00:00.000Z",
              "PrecioUnitario": 41
            }
          },
          {
            "_id": "64f748606f3e6be503d3bf10",
            "Medicamento": {
              "IdMedicamento": 5,
              "NombreComercial": "Pax Noche",
              "Lote": 3161616111,
              "FechaCaducidad": "2023-03-19T00:00:00.000Z",
              "PrecioUnitario": 80
            }
          },
          {
            "_id": "64f748606f3e6be503d3bf11",
            "Medicamento": {
              "IdMedicamento": 6,
              "NombreComercial": "Complejo B",
              "Lote": 3161616111,
              "FechaCaducidad": "2023-07-10T00:00:00.000Z",
              "PrecioUnitario": 79
            }
          }
        ]
      }
      ```

1.  Cantidad total de dinero recaudado por las ventas de medicamentos

    - Authorization: `http://127.20.20.1:5000/token/facturaVenta`
    - URL: `http://127.20.20.1:5000/api/get/obtenerVentasTotal`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```json
      {
        "message": "se han encontrado 1 resultados",
        "result": [
          {
            "totalDineroDolares": 838
          }
        ]
      }
      ```

1.  Recetas prescritas por la Dra. Martínez

    - Authorization: `http://127.20.20.1:5000/token/recetas`
    - URL: `http://127.20.20.1:5000/api/get/obtenerRecetasDra`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```json
      {
        "message": "se han encontrado 2 resultados",
        "result": [
          {
            "_id": "64f748636f3e6be503d3bf21",
            "Receta": 2,
            "Fecha": "2023-01-03T05:00:00.000Z",
            "Paciente": "Tatiana Ramirez",
            "NombreMedico": "Tatiana",
            "ApellidoMedico": "Martínez",
            "Medicamentos": {
              "NombreMedicamento": "Paracetamol"
            }
          },
          {
            "_id": "64f748636f3e6be503d3bf21",
            "Receta": 2,
            "Fecha": "2023-01-03T05:00:00.000Z",
            "Paciente": "Tatiana Ramirez",
            "NombreMedico": "Tatiana",
            "ApellidoMedico": "Martínez",
            "Medicamentos": {
              "NombreMedicamento": "Buscapina"
            }
          }
        ]
      }
      ```

1.  Obtener el medicamento más caro

    - Authorization: `http://127.20.20.1:5000/token/medicamentos`
    - URL: `http://127.20.20.1:5000/api/get/obtenerMedicamentoCaro`
    - Método: `GET`
    - Datos de entrada (body): Ninguno.
    - Datos de salida:

      ```json
      {
        "message": "se han encontrado 1 resultados",
        "result": [
          {
            "_id": "64f748606f3e6be503d3bf10",
            "Medicamento": {
              "IdMedicamento": 5,
              "NombreComercial": "Pax Noche",
              "Lote": 3161616111,
              "FechaCaducidad": "2023-03-19T00:00:00.000Z",
              "PrecioUnitario": 80
            }
          }
        ]
      }
      ```

#### Autora: Emily Nieves
