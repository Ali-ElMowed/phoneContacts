const { addContact,getContacts,getContactByUserId } = require('./service');
const User = require('../model/User');
const Contact = require('../model/Contact');
const { findByIdAndUpdate } = require('../model/Contact');

async function get(req,res){
    try{

        if(req.body.user){
            const user_id = req.body.user;
            const result = await getContactByUserId(user_id);
            return res.send(result)
        }
        const result = await getContacts();
        return res.send(result);
    }
    catch(error){
        console.log(error)
    }
}
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

async function deleteContact(req, res){
    try{
        const contact = await Contact.findOne({
            _id: req.body.id
        })

        const deleteResult = await contact.remove();
         return res.send("Contact Deleted");
    }
    catch(error){
        console.log(error.message);
    }
}

// async function updateContact(req, res){
//     // try{
//         const contact_id = req.param.id;
//         const updates = req.body;
//         const contact = await Contact.findByIdAndUpdate(contact_id,updates,
//         //     {name:" req.body.name",
//         //     phone_number: "req.body.phone_number",
//         //     email: "req.body.email",
//         //     relation_status: "req.body.relation_status",
//         //     location: "req.body.location"
//         // },
//         //     {new:true,
//         //     runValidators:true}
//         // ,
//         function(err,result){
//             if(err){
//                 console.log(err.message);
//             }
//             res.send()
//         })

//         // const contact = await Contact.findById(req.body.id);
//         // const updateCon = await contact
        
//     // }
//     // catch(error){
//     //     console.log(error.message)
//     // }
// }

module.exports = {
    add,
    get,
    deleteContact,
    // updateContact
}