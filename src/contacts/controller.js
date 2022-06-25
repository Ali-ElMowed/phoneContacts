const { addContact } = require('./service');
const User = require('../model/User');
const Contact = require('../model/Contact')


async function add(req, res) {

    try {
        console.log(req.body);
        const newContact = await addContact(req.body);
        return res.status(200).send(newContact);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    add
}