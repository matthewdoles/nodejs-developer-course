const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token  = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'privatekey')
        const user = await User.findOne({ _id : decoded._id, 'tokens.token': token })

        if(!user) {
            throw new Error()
        }

        req.user = user
        next()
    }
    catch(e) {
        res.status(401).send({ error: 'Please authenticate' })
    }
}

module.exports = auth

//
// without middleware: new request -> run route handler
//
// with middleware:    new request -> do something -> run route handler
//