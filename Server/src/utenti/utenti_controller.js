const pool = require('../../db');
const queries = require('./utenti_queries');

const getUtenti = (req, res) => {
    pool.query(queries.getUtenti, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const getUtentiById = (req, res) => {
    const id = parseInt(req.params.id);
    //[id] perché è un array, si possono passare più parametri
    pool.query(queries.getUtentiById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUtenti = (req, res) => {
    const { username, pass, nome, cognome, email, foto} = req.body;
    
    pool.query(queries.getUtentiById, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            res.status(400).send('L\'utente esiste già nel database');
        } 
        else {
            pool.query(queries.addUtenti, [username, pass, nome, cognome, email, foto], (error) => {
                if (error) throw error;
                res.status(201).send('Utente aggiunto correttamente');
            });
        }
    },);
};

const deleteUtenti = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteUtenti, [id], (error, results) => {
        if (error) throw error;
        if (results.rowCount === 0) {
            res.status(404).send('Utente non trovato');
        }else{
            res.status(200).send('Utente eliminato correttamente');
        
        }
    });
}

const updateUtenti = (req, res) => {
    const id = parseInt(req.params.id);
    const { email } = req.body;
    pool.query(queries.updateUtenti, [id, email], (error, results) => {
        if (error) throw error;
        if (results.rowCount === 0) {
            res.status(404).send('Utente non trovato');
        }else{
            res.status(200).send('Utente aggiornato correttamente');
        }
    });
}

module.exports = {
    getUtenti,
    getUtentiById,
    addUtenti,
    deleteUtenti,
    updateUtenti
};







