
const getRecensioniById = 'SELECT recensioni.*, titolo FROM recensioni JOIN film ON recensioni.film_id = film.id WHERE film_id = $1';
const getRecensioni = 'SELECT recensioni.*, titolo FROM recensioni JOIN film ON recensioni.film_id = film.id ORDER BY recensioni.voto DESC';
const addRecensioni = 'INSERT INTO recensioni (id, voto, commento, data, num_like, num_dislike, utente_id, film_id ) VALUES (default, $1, $2, $3, $4, $5, $6, $7)';
const deleteRecensione = 'DELETE FROM recensioni WHERE id = $1';
const updateRecensione = 'UPDATE recensioni SET voto = $1, commento = $2, data = $3, num_like = $4, num_dislike = $5, utente_id = $6, film_id = $7 WHERE id = $8';

module.exports = {
    getRecensioniById,
    getRecensioni,
    addRecensioni,
    deleteRecensione,
    updateRecensione,
}





