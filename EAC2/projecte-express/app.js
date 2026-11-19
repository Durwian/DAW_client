const express = require("express");

const app = express();
const PORT = 3000;

// 1) Middleware de parsers
app.use(express.json());                 // per cosos JSON (application/json)
app.use(express.urlencoded({ extended: true })); // per formularis HTML (application/x-www-form-urlencoded)

// 2) Servir fitxers estàtics (public/)
app.use(express.static('public'));

// 3) Rutes de demostració

// GET /api/hola?nom=Maria  -> { missatge: "Hola, Maria!" }
app.get('/api/hola', (req, res) => {
  const nom = req.query.nom || 'món';
  res.json({ missatge: `Hola, ${nom}!` });
});

// POST /api/eco  (rep JSON o formulari, i el retorna)
app.post('/api/eco', (req, res) => {
  // req.body conté les dades del client (JSON o formulari)
  res.status(201).json({
    rebut: true,
    dades: req.body
  });
});

// 4) Ruta 404 per a camins no existents d'API
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Ruta d’API no trobada' });
});

// 5) Middleware de gestió d'errors (exemple bàsic)
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error intern del servidor' });
});

// 6) Posar el servidor en marxa
app.listen(PORT, () => {
  console.log(`Servidor escoltant a http://localhost:${PORT}`);
});