# Ezshop (Documentación)

__Puede usar y probar la app en__ https://braianmg-ezshop.herokuapp.com/

## Pruébalo
- Instalar dependencias con __npm install__
- Iniciar la app con __npm run start__
- No olvide __configurar su archivo .env__ desde las __plantilla .env.example__ (para este caso pueden tener los mismo datos)
De este modo tendrá funcionando la aplicación de forma local

En la carpeta __client__ se encuentran todos los archivos del front hechos con __React__
- Para iniciar el front primero instale las dependencias con __npm install__ (dentro de la carpeta client)
- Inicie la app con __npm start__
- Es necesario tener corriendo también el backend __si se quiere poder consultar la API__

# API
- Endpoints:
  - __GET__ /api/v1/products -> (Para obtener la lista de productos modificada)
  - __GET__ /api/v1/categories -> (Para obtener la lista de categorías en forma de árbol) __[SIN TERMINAR]__

## Comentarios
Me gusto bastante el challenge, y me agrada el resultado obtenido.
Muy interesantes los puntos adicionales:
  - Los A de UI y JS __no estoy seguro de como hacerlos__
  - Los B de UI y JS tuve la __intención de hacerlos__:
    - Para UI entiendo que debería convertir a __PWA__ y __cachear__ archivos usando __serviceWorker__
    - Para JS sospechaba de __recursividad__, luego noté que en la lista de categorías lo mencionan sutilmente

Luego de esta entrega __planeo continuar__ con los puntos adicionales que tuve __intenciones de resolver__ y finalmente __investigar__ formas para lograr los puntos de los que __no estaba seguro como hacerlos__