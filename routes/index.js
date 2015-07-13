var express = require('express');
var router = express.Router();

/* GET home page. */
// renderiza como respuesta la views index.ejs pasandole como ejs:embbeded javascript, el objeto title:'Quiz'
// que sera sustituido por su valor en cada etiqueta title  <%= title %>
//EJS: javascript embebido en html <%...codigo js , comandos etc......%>

router.get('/', function(req, res) { // '/' ruta vacia ejemplo: localhost:3000/algo no valdria
  res.render('index', { title: 'Quiz' }); 
});

module.exports = router;
