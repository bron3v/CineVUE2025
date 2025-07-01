const login = "SELECT * FROM utenti WHERE username = $1 AND pass = $2";

module.exports = {
    login
}