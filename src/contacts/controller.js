const { addContact, getContacts, getContactByUserId, getContactById } = require('./service');
const User = require('../model/User');
const Contact = require('../model/Contact');
// const { findByIdAndUpdate } = require('../model/Contact');

//get contact by id or all contacts
async function get(req, res) {
    const { id } = req.params
    try {

        if (id) {
            const result = await getContactByUserId(id);
            return res.status(200).json({ result })
        }
    }
    catch (error) {
        console.log(error)
    }
}
async function getContact(req, res) {
    try {
        if (req.body._id) {
            const id = req.body._id;
            const result = await getContactById(id);
            return res.send(result)
        }
    }
    catch (error) {

    }
}
//add contact
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

//delete contact
async function deleteContact(req, res) {
    try {
        const contact = await Contact.findOne({
            _id: req.body.id
        })

        const deleteResult = await contact.remove();
        return res.send("Contact Deleted");
    }
    catch (error) {
        console.log(error.message);
    }
}

//update contact
async function updateContact(req, res) {
    try {
        const { name, phone_number, email, relation_status, location } = req.body;
        const contact = await Contact.findByIdAndUpdate(req.param.id, {
            name,
            phone_number,
            email,
            relation_status,
            location
        });
        const updateContact = await contact.save();
        return res.send(updateContact);

    }
    catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    add,
    get,
    deleteContact,
    updateContact,
    getContact
}