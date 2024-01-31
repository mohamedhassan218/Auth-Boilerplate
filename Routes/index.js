const router = require('express').Router();
const passport = require('passport');
const utils = require('./utils')

router.post('/login', utils.login);

router.post('/register', utils.register);

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.status(200).json({ success: true, msg: "Successfully Authenticated" });
});

module.exports = router;