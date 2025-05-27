const AuthService = require('../services/auth.service.js');

const signup = async (req, res) => {
    try {
        const { email, password, nome } = req.body;
        const user = await AuthService.signup(email, password, nome);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthService.login(email, password);
        res.status(200).json({ message: 'Login bem-sucedido', user });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

module.exports = { signup, login };
