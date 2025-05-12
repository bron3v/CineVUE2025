const pool = require('../../db');
const queries = require('./film_queries');

const getFilmList = (req, res) => {
    pool.query(queries.getFilms, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const getFilmById = (req, res) => {
    const id = parseInt(req.params.id);
    //[id] perché è un array, si possono passare più parametri
    pool.query(queries.getFilmById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addFilm = (req, res) => {
    const { id, titolo, regista, genere, descrizione, foto_locandina} = req.body;
    
    pool.query(queries.getFilmById, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            res.status(400).send('Il film esiste già nel database');
        } 
        else {
            pool.query(queries.addFilm, [id, titolo, regista, genere, descrizione, foto_locandina], (error) => {
                if (error) throw error;
                res.status(201).send('Film aggiunto correttamente');
            });
        }
    },);
};

const deleteFilm = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteFilm, [id], (error, results) => {
        if (error) throw error;
        if (results.rowCount === 0) {
            res.status(404).send('Film non trovato');
        }else{
            res.status(200).send('Film eliminato correttamente');
        
        }
    });
}

const updateFilm = (req, res) => {
    const id = parseInt(req.params.id);
    const { descrizione } = req.body;
    pool.query(queries.updateFilm, [id, descrizione], (error, results) => {
        if (error) throw error;
        if (results.rowCount === 0) {
            res.status(404).send('Film non trovato');
        }else{
            res.status(200).send('Film aggiornato correttamente');
        }
    });
}

module.exports = {
    getFilmList,
    getFilmById,
    addFilm,
    deleteFilm,
    updateFilm
};







