const prisma = require('../Auth/prismaClient');
const utils = require('../Auth/utils');

async function login(req, res, next) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: req.body.username,
            },
        });
        if (!user) {
            return res.status(401).json({ success: false, msg: "Could not find user" });
        }

        const isValid = utils.validPassword(req.body.password, user.hash, user.salt);

        if (isValid) {
            const tokenObject = utils.issueJWT(user);
            res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });
        } else {
            res.status(401).json({ success: false, msg: "You entered the wrong password" });
        }
    } catch (err) {
        next(err);
    }
}

async function register(req, res, next) {
    const saltHash = utils.genPassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    try {
        const newUser = await prisma.user.create({
            data: {
                email: req.body.email,
                username: req.body.username,
                hash: hash,
                salt: salt
            }
        });

        res.json({ success: true, user: newUser });
    } catch (err) {
        res.json({ success: false, msg: err.message });
    }
}

module.exports = {
    login,
    register
};