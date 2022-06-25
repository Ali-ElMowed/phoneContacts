const { Router, application } = require('express');
const {add} = require('./controller');
const router = Router();


router.post('/addCat',add);


module.exports = router;