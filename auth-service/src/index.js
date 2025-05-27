const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes.js');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Auth-service rodando na porta ${PORT}`);
});
