const { getUsers, getById, addUser, getByEmail } = require('./service');
const Contact = require('../model/Contact');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
// const salt = require('salt');


async function getUser(req, res) {
    try {
        console.log(req.query);

        if (req.query.id) { // ?id=k1231 -> query paramet
            const id = req.query.id;
            const result = await getById(id);
            console.log('result of specific user =>', result);
            return res.send(result);
        }

        const result = await getUsers();
        console.log('result =>', result);

        return res.send(result);
    } catch (error) {
        console.log(error);
    }
}

async function register(req, res) {
    const { email, password } = req.body

    try {
        // return res.status(200).send("jasjdb")
        console.log(req.body);

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const addUserResult = await addUser(req.body, hashPassword);
        console.log('addUserResult =>', addUserResult);
        const token = jwt.sign(
            {
                _id: addUserResult._id,
                //  name: user.name,
                email
            }, "secret"
            // "09f26e402586e2faa8da4c98a35f1b20d6b033c60"
        );
        return res.status(200).json({ user: addUserResult._id, token });
    } catch (error) {
        console.log(error);
    }
}

async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await getByEmail(email);
        if (!user) return res.status(400).send('invalid credentials');

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).send('invalid credentials');

        const token = jwt.sign(
            {
                _id: user._id,
                //  name: user.name,
                email: user.email
            }, "secret"
            // "09f26e402586e2faa8da4c98a35f1b20d6b033c60"
        );

        return res.status(200).json({ user: user._id, token });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    getUser,
    register,
    login,
}