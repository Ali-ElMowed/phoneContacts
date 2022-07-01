const { Router, application } = require('express');
const { get, add, deleteContact,
     updateContact,
     getContact
} = require('./controller');
const router = Router();

router.get('/getContacts/:id', get);
router.get('/getContactById/:id', getContact);
router.post('/addContact', add);
router.post('/updateContact', updateContact);
router.delete('/deleteContact/:id', deleteContact);


module.exports = router;