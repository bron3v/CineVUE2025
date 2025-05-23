const express = require('express');
const session = require('express-session');

const filmRoutes = require('./src/film/film_routes');
const utentiRoutes = require('./src/utenti/utenti_routes');
const recensioniRoutes = require('./src/recensioni/recensioni_routes');
const sessionRoutes = require('./src/sessions/session_routes');
const app = express();
const port = 3000;

app.use(express.json()); 

app.use(session ({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300000, secure: false } 
}));

app.get('/api/', (req, res) => {
    res.send('Hello World!');
});

app.use("/film", filmRoutes);
app.use("/utenti", utentiRoutes);
app.use("/recensioni", recensioniRoutes);
app.use("/sessions", sessionRoutes);

app.listen(port, () => console.log(`app listening on port ${port}!`));











