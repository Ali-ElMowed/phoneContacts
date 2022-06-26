const { Router, application } = require('express');
const {get,add, deleteContact,
    // updateContact
} = require('./controller');
const router = Router();

router.get('/getContacts',get);
router.post('/addContact',add);
router.delete('/deleteContact',deleteContact);
// router.post('/updateContact',updateContact);


module.exports = router;