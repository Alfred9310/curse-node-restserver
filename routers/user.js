const { Router } = require("express");
const { userGet, userPost, userPut, userDelete } = require('../controllers/users');

const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.delete('/', userDelete);

router.post('/', userPost);


module.exports = router;