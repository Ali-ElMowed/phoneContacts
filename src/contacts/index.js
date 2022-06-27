const { Router, application } = require('express');
const { get, add, deleteContact,
     updateContact,
     getContact
} = require('./controller');
const router = Router();

router.get('/getContacts/:id', get);
router.post('/addContact', add);
router.delete('/deleteContact', deleteContact);
router.post('/updateContact', updateContact);
router.post('/getContactById', getContact);


module.exports = router;