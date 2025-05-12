const pool = require('../../db');
const queries = require('./recensioni_queries');

const getRecensioni = (req, res) => {
    pool.query(queries.getRecensioni, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}
const getRecensioniById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getRecensioniById, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            res.status(200).json(results.rows[0]);
        } else {
            res.status(404).send('Recensione non trovata');
        }
    });
}
const addRecensioni = (req, res) => {
    const {voto, commento, data, num_like, num_dislike, utente_id, film_id } = req.body;
    pool.query(queries.addRecensioni, [voto, commento, data, num_like, num_dislike, utente_id, film_id], (error, results) => {
        if (error) throw error;
        res.status(201).json({message:'Recensione aggiunta correttamente'});
    });
}

const deleteRecensione = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteRecensione, [id], (error, results) => {
        if (error) throw error;
        if (results.rowCount === 0) {
            res.status(404).send('Recensione non trovata');
        }else{
            res.status(200).send('Recensione eliminata correttamente');
        }
    });
}
const updateRecensione = (req, res) => {
    const id = parseInt(req.params.id);
    const { titolo, descrizione, voto, id_utente, id_film } = req.body;
    pool.query(queries.updateRecensione, [titolo, descrizione, voto, id_utente, id_film, id], (error, results) => {
        if (error) throw error;
        if (results.rowCount === 0) {
            res.status(404).send('Recensione non trovata');
        }else{
            res.status(200).send('Recensione modificata correttamente');
        }
    });
}

module.exports = {
    getRecensioni,
    getRecensioniById,
    addRecensioni,
    deleteRecensione,
    updateRecensione
};







