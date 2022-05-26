const { response, request } = require('express');

const userGet = (req = request, res = response ) => {

    const query = req.query;

    res.json({
        msg: 'get api - controlador',
        query
    });
}

const userPost = (req, res) => {

    const body = req.body;

    res.json({
        msg: 'get api - controlador',
        body
    });
}

const userPut = (req, res) => {

    const id = req.params.id;
    res.json({
        msg: 'get api - controlador',
        id
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'get api - controlador'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}