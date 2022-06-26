const Contact = require("../model/Contact");


async function getContacts(){
    return await Contact.find();
}

async function getContactByUserId(user){
    return await Contact.find({
        user
    })
}

async function getContactById(_id){
    return await Contact.find({
        _id
    })
}
async function addContact(body){
    const {
        name,
        phone_number,
        email,
        relation_status,
        loctaion,
        user,

    }=body
    const contact = new Contact({
        name,
        phone_number,
        email,
        relation_status,
        loctaion,
        user
    })
    
    return await contact.save();
}

module.exports = {
    addContact,
    getContacts,
    getContactByUserId,
    getContactById
}