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
// Base de preguntas
const preguntas = [
    { id: 0, pregunta: "Capital de Italia", respuesta: "roma" },
    { id: 1, pregunta: "Capital de Francia", respuesta: "paris" },
    { id: 2, pregunta: "Capital de España", respuesta: "madrid" },
    { id: 3, pregunta: "Capital de Alemania", respuesta: "berlin" }
];

// GET /quizes/question
exports.question = function(req, res) {

    const id = req.query.id ? parseInt(req.query.id) : 0;

    res.render("quizes/question", {
        pregunta: preguntas[id].pregunta,
        id: preguntas[id].id
    });
};

// GET /quizes/answer
exports.answer = function(req, res) {

    const id = parseInt(req.query.id);

    const respuestaUsuario =
        req.query.respuesta
            ? req.query.respuesta.trim().toLowerCase()
            : "";

    const correcta = preguntas[id].respuesta;

    if (respuestaUsuario === correcta) {
        res.render("quizes/answer", {
            respuesta: "Correcto"
        });
    } else {
        res.render("quizes/answer", {
            respuesta: `Incorrecto. La respuesta correcta es ${correcta}`
        });
    }
};
