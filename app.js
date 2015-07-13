//aplicacion principal de nuestro programa

// se importan modulos express y path
var express = require('express');
var path = require('path');
// se importan los MWs que se van a instalar
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// se importan los enrutadores
var routes = require('./routes/index');


//CREACION DE LA APLICACION
var app = express();

// view engine setup  instala el generador de vistas
app.set('views', path.join(__dirname, 'views')); // con join se une la ruta del directorio actual,quiz q es __dirname con views, dando como resultado el path absoluto
app.set('view engine', 'ejs'); // vista ejs, puesto que la instalamos anteriormente, $ nodejs node_modules/express-generator/bin/express --ejs quiz
// Instalacion de los MW anteriormente importados en el mismo orden en que deben ejecutarse cuando llegue una transaccion http


// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico')); //para poner logo en nuestra 
//aplicacion quitamos los comentarios y sustituimos. Actualmente es recomendable no hacerlo asi
//sino incluir desde la pagina html <link rel="icon" href="favicon.ico" type="image/x-icon"/>
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ASOCIACION DE RUTAS A SUS GESTORES
//instalacion de los enrutadores(rutas)
app.use('/', routes);  // si la rutal path es la vacia ej localhost:3000 accede al directorio routes y ejecuta index.js


// MW ERROR 1: En caso de que las rutas no sean ni routes ni users gestionaremos los errores,
//pasando al mw de error HTTP 404 (recurso no encontrado) y de este al siguiente error
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err); // pasa al siguiente MW de error 2
});

// MW ERROR 2: gestion de errores durante el desarrollo(estamos trabajando en nuestro ordenador local)
// error handlers
// development error handler
// will print stacktrace
// Las vistas EJS se generan en el objeto de respuesta res y se envian al cliente 
//con res.render(archivo de vista.ejs,parametros a sustituir en la vista)
if (app.get('env') === 'development') { // si se cumple lo ejecuta sino pasa al mw error 3
    app.use(function(err, req, res, next) {
        res.status(err.status || 500); // si no hay ningun error en err.status dara el error 500
        res.render('error', { // se renderiza el error
            message: err.message,
            error: err // imprime lista completa del error xq estamos eb fase de desarrollo, pasandolo a error.ejs
        });
    });
}
//MW ERROR 3: gestion de errores de produccion(fase de despliegue del proyecto)
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {} // no genera lista de errores
    });
});

// se exporta app para comando de arranque
module.exports = app;
