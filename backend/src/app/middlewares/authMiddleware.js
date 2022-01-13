require('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = function authMidlleware(request, response, next) {
    const { authorization } = request.headers;

    if(!authorization) {
        return response.status(401).json({error: "User not authorization"})
    }

    const token = authorization.replace('Bearer','').trim();

    try {
        const data = jwt.verify(token, process.env.SECRET);
        const { id } = data;
        request.userId = id;
    } catch (error) {
        return response.status(401).json({error: "User not authorization"});
    }

    next()
}