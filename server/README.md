Listado de Endopints:

|Id|Method|Path|Description|
|---|---|---|---|
|1|Get|'/'|Home con una descripcion de la página.|
|2|Get|'/listadoFunkos'| Una lista de Funkos donde se muestran todos los que estan disponibles.|
|3|Get|'/listadoFukos/filtrar'|Muestra la lista con los filtros selecionados.|
|4|Get|'/acceso'|Formulario de login.|
|5|Post|'/acceso'|Login de un usuario.|
|6|Get|'/registro'|Formulario de registro.|
|7|Post|'/registro'|Guarda en la DB un usuario.|
|8|Get|'/mi-perfil/listado'|Muestra la lista de todos los funko que tengo en venta.|
|9|Post|'/mi-perfil/listado'|Elimina de tus lista los funkos que ya vendiste.|
|10|Put|'/mi-perfil/editar'|Página del formulario de edición de datos de usuario y lo guarda en la DB|
|11|Put|'/funko/crear'|Formulario para crear el funko|
|12|Get|'/funko/detalles/:id'|Página con los detalles del funko con el Id asignado, incluido el precio, fotos, características, y el bontón que abre la ventana de mensajes para contactar etc.|
|13|Put|'/funko/editar/:id|Editar el Funko|
|14|Get|'/funko/:id'|Eliminar funko|
|15|Get|'/cerrar-sesion'|Cierra la sesión y te lleva la Home.|