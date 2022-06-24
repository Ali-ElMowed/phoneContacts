const { Router } = require('express');
const {register,login, getUser} = require('./controller');
const router = Router();

router.get('/',getUser)
router.post('/auth/register', register);
router.post('/auth/login', login);



module.exports = router;