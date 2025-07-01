const pool = require('../../db');
const queries = require('./session_queries');

const login = (req, res) => {
    const  {username, pass} = req.body;

    pool.query(queries.login, [username, pass], (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            req.session.userId = results.rows[0].username;
            res.status(200).json(req.session);
        } else {
            res.status(401).json({message: 'Username o password errati!'})
        }
    });
} 

const logout = (req, res) => {
    if(req.session.userId) {
        req.session.destroy();
        res.status(200).json({message: 'Logout effettuato correttamente'});
    }else {
        res.status(401).json({message: 'Non sei loggato!'})
    }
}

const isLogged = (req, res) => {
    if(req.session.userId) {
        res.status(200).json(req.session);
    }else{
        res.status(401).json({message: 'Non sei loggato!'});
    }
}
module.exports = {
    login,
    logout,
    isLogged
}