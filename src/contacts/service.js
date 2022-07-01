const Contact = require("../model/Contact");


async function getContacts() {
    return await Contact.find();
}

async function getContactByUserId(user) {
    return await Contact.find({
        user
    })
}

async function getContactById(_id) {
    return await Contact.findById(_id)
}
async function addContact(body) {
    
    const contact = new Contact(body)

    return await contact.save();
}

module.exports = {
    addContact,
    getContacts,
    getContactByUserId,
    getContactById
}