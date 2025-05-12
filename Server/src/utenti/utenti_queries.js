const getUtenti = "SELECT * FROM utenti";
const getUtentiById = "SELECT * FROM utenti WHERE id = $1";
const addUtenti = "INSERT INTO utenti (username, pass, nome, cognome, email, foto) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteUtenti = "DELETE FROM utenti WHERE id = $1";
const updateUtenti = "UPDATE utenti SET email = $2 WHERE id = $1";

module.exports = {
    getUtenti,
    getUtentiById,
    addUtenti,
    deleteUtenti,
    updateUtenti
};






