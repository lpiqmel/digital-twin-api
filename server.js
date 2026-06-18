const express = require('express');
const app = express();

app.get('/fabrica', (req, res) => {
    res.json({
        puerta: {
            estado: "cerrada",
            alarma: false
        },
        prensa: {
            estado: "trabajando",
            ciclos: 142,
            error: false
        },
        generador: {
            nivel_energia: 75,
            estado: "normal",
            consumo_actual: 3.2
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor funcionando");
});