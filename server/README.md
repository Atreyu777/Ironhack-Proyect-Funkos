Listado de Endopints:

|Id|Method|Path|Description|
|---|---|---|---|
|1|Get|'/'|Home con una descripcion de la página.|
|2|Get|'/listado'| Una lista de Funkos donde se muestran todos los que estan disponibles.|
|3|Get|'/listado/filtrar'|Muestra la lista con los filtros selecionados.|
|4|Get|'/acceso'|Formulario de login.|
|5|Post|'/acceso'|Login de un usuario.|
|6|Get|'/registro'|Formulario de registro.|
|7|Post|'/registro'|Guarda en la DB un usuario.|
|8|Get|'/mi-perfil/listado'|Muestra la lista de todos los funko que tengo en venta.|
|9|Post|'/mi-perfil/listado'|Elimina de tus lista los funkos que ya vendiste.|
|10|PUT|'/mi-perfil/editar'|Página del formulario de edición de datos de usuario y lo guarda en la DB|
|11|PUT|'/funko/crear'|Formulario para crear el funko|
|12|put|'/funko/:id'|Página con los detalles del funko con el Id asignado, incluido el precio, fotos, características, y el bontón que abre la ventana de mensajes para contactar etc.|
|13|Get|'/cerrar-sesion'|Cierra la sesión y te lleva la Home.|