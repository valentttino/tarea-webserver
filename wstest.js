const express = require('express');
const app = express();  
const port = 3000;  
const fs = require('fs'); //Utilizado para escribir en el archivo las request y demas recibidas

// Utilización de la carpeta public donde está el HTML de la web
app.use(express.static('public'));

// Redirección al archivo HTML
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

// Redirigir solicitudes /, /home, /home.html, /index a /index.html
app.get(['/','/home','/home.html','/index'], (req, res) => {
  res.redirect(301, '/index.html');

  // Registrar solicitud en archivo de registro
  app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${req.method} ${req.url} ${timestamp} ${res.statusCode} ${res.statusMessage}\n`;

    fs.appendFile('mycoolserver.log', logMessage, (err) => {
      if (err) {
        console.error('Error al escribir en el archivo de registro:', err);
      }
    });

    next();
});

});

// Manejar solicitudes para rutas no encontradas (404) vinculandolo al archivo 404.html donde se puede editar el contenido del mensaje de error.
app.get('*', (req, res) => {
  res.status(404).sendFile('public/404.html', { root: __dirname });

  app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${req.method} ${req.url} ${timestamp} ${res.statusCode} ${res.statusMessage}\n`;

    fs.appendFile('mycoolserver.log', logMessage, (err) => {
      if (err) {
        console.error('Error al escribir en el archivo de registro:', err);
      }
    });

    next();  
});
});

// Muestra por consola el arranque del servidor
app.listen(port, () => {
  console.log(`web server funcionando en http://localhost:${port}`);
});


