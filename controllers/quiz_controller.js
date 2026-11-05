/*

// GET /quizes/question
exports.question = function(req, res) {
   res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function(req, res) {

   const respuestaUsuario = req.query.respuesta ? req.query.respuesta.trim() : "";

   if (respuestaUsuario.toLowerCase()=== 'roma'){
      res.render('quizes/answer', {respuesta: 'Correcto'});
   } else {
      res.render('quizes/answer', {respuesta: 'Incorrecto'});
   }
};

*/


//mejora del controlador para mas preguntas mayo 2026
// Banco de preguntas aleatorias
const preguntas = [
    {
        pregunta: "Capital de Italia",
        respuesta: "roma"
    },
    {
        pregunta: "Capital de Francia",
        respuesta: "paris"
    },
    {
        pregunta: "Capital de España",
        respuesta: "madrid"
    },
    {
        pregunta: "Capital de Alemania",
        respuesta: "berlin"
    },
    {
        pregunta: "Capital de Portugal",
        respuesta: "lisboa"
    }
];

// GET /quizes/question
exports.question = function(req, res) {

    const indice = Math.floor(Math.random() * preguntas.length);

    res.render('quizes/question', {
        pregunta: preguntas[indice].pregunta,
        solucion: preguntas[indice].respuesta
    });
};


// GET /quizes/answer
exports.answer = function(req, res) {

    const respuestaUsuario = req.query.respuesta
        ? req.query.respuesta.trim().toLowerCase()
        : "";

    const solucion = req.query.solucion;

    if (respuestaUsuario === solucion) {
        res.render('quizes/answer', {
            respuesta: 'Correcto'
        });
    } else {
        res.render('quizes/answer', {
            respuesta: `Incorrecto. La respuesta correcta es ${solucion}`
        });
    }
};