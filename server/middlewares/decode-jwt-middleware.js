const JWT = require('jsonwebtoken');

async function decodeJWTTokenMiddleware(req, res, next) {

    const token = req.headers.authorization;
    // If there is no authorization key in the headers then token in not provided
    if (!token) {
        return res.status(400).json({ error: 'No token provided' })
    }

    // The format of the value of authorization will be - Bearer + 'token'
    const tokenParts = token.split(' ');
    if (tokenParts.length > 2) {
        return res.status(400).json({ error: 'Token is invalid' })
    }

    if (tokenParts[0] !== 'Bearer') {
        return res.status(400).json({ error: 'Token is invalid' })
    }

    try {
        const decodedData = await JWT.verify(tokenParts[1], process.env.JWT_SECRET, { algorithms: ['HS256'] });

        console.log({decodedData})
        console.log('Token decoded successfully');
        
        req.AUTH_USER_DATA = decodedData;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: 'Failed to authenticate expired token' })
    }
}

module.exports = decodeJWTTokenMiddleware;