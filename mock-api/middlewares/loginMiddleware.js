// login-middleware.js
module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === 'a' && req.body.password === 'a') {
        res.status(200).json({})
        } else {
        res.status(400).json({message: 'wrong password'})
        }
    } else {
        next()
    }
}