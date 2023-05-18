# Tarea Web Server

Tarea de DSW sobre crear un primer servidor web que cumpla con algunas características.

En este caso, las que cumple este proyecto son:
* Devuelve las páginas solicitadas desde una subcarpeta static solo por método get.
* Da error por web (404) si no existe la página.
* Muestra por consola cuando el server arranca.
* Cuando se hace un request a localhost:3000/,localhost:3000/home, localhost:3000/home.html localhost:3000/index muestra localhost:3000/index.html.

## Se debe corregir y agregar
CORREGIR: Escribir en el archivo mycoolserver.log las request (method, url, timestamp y resultado de la respuesta con codigo y mensaje).

Agregar:
* Dar error por web (405) si usa otro method distinto de get.
* Dar error 500 si no puede hacer algo.
* Mostrar por consola cuando no puede escribir en le log de errores.

