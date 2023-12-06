const jwt = require('jsonwebtoken');
const config = require('../config/secret.js');

function verifikasi() {
    return function(req, res, next) {
        // Cek authorization header
        var tokenWithBearer = req.headers.authorization;
        if (tokenWithBearer) {
            var token = tokenWithBearer.split(' ')[1];
            // Verifikasi token
            jwt.verify(token, config.secret, function(error, decoded) {
                if (error) {
                    return res.status(401).send({ auth: false, message: 'Token tidak terdaftar!' });
                } else {
                    if (decoded && decoded.rows && decoded.rows[0].role == 2) {
                        req.auth = decoded;
                        next();
                    } else {
                        return res.status(401).send({ auth: false, message: 'Gagal mengotorisasi role anda!' });
                    }
                }
            });
        } else {
            return res.status(401).send({ auth: false, message: 'Token tidak tersedia!' });
        }
    };
}

module.exports = verifikasi;
