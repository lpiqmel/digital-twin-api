const express = require('express');
const app = express();

let estado = {
  puerta: {
    estado: "cerrada",        // "abierta", "cerrada", "bloqueada", "acceso_denegado"
    ultimo_acceso: "2026-06-18T10:00:00",
    alarma: false
  },
  prensa: {
    estado: "error",     // "apagada", "encendida", "trabajando", "error", "mantenimiento"
    ciclos: 142,
    error: false
  },
  generador: {
    nivel_energia: 35,        // 0-100
    estado: "normal",         // "normal", "bajo_consumo", "critico"
    consumo_actual: 3.2
  },
  alarma_general: false
};

app.get('/fabrica', (req, res) => res.json(estado));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor funcionando"));