Desplegada en Render https://quiz-2015-jesusillo.onrender.com/

Aplicacion de servidor , con un juego de preguntas tipo adivinanzas(quiz) correspondiente al curso "Desarrollo de servicios en la nube con HTML5, Javascript y node.js" 
Uso de framework Express para construir aplicaciones web y APIs en Node.js. 


--------------------- Logica de la aplicacion------------------

GET /quizes/question
        |
        v
question()
        |
        v
question.ejs
        |
        v
Pregunta: Capital de Italia
        |
        v
Usuario escribe: Roma
        |
        v
GET /quizes/answer?respuesta=Roma
        |
        v
answer()
        |
        v
¿respuesta == "roma"?
      /   \
    Sí     No
    |       |
Correcto  Incorrecto
