const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

const validateSession = (req, res, next) => {
    const token = req.headers. authorization;

    if (!token) {
        return res.status(403).send({ auth: false, message: "No token provided"})
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {
            if (!err && decodeToken) {
                User.finderOne({
                    where: {
                        id: decodeToken.id
                    }
                })
                .then(user => {

                    if ( user => {
                        if (!user) throw err;

                        req.user = user;
                        return next();
                    })
                    .catch(err => next(err));
            } else {
                req.erros = errs;
                return res.status(500).send('Not Authorized');
            }
        });
    }
};