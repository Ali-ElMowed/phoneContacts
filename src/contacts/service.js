const Contact = require("../model/Contact");

async function addContact(body){
    const {
        name,
        phone_number,
        email,
        relation_status,
        loctaion,
        users,

    }=body
    const contact = new Contact({
        name,
        phone_number,
        email,
        relation_status,
        loctaion,
        users
    })
    
    return await contact.save();
}

module.exports = {
    addContact,
}