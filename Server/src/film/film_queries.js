const getFilms = "SELECT * FROM film";
const getFilmById = "SELECT * FROM film WHERE id = $1";
const addFilm = "INSERT INTO film (id, titolo, regista, genere, descrizione, foto_locandina) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteFilm = "DELETE FROM film WHERE id = $1";
const updateFilm = "UPDATE film SET descrizione = $2 WHERE id = $1";

module.exports = {
    getFilms,
    getFilmById,
    addFilm,
    deleteFilm,
    updateFilm
};






