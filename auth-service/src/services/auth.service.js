const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const signup = async (email, password, nome) => {
    const userExists = await prisma.aluno.findUnique({ where: { email } });
    if (userExists) throw new Error('Usuário já existe');

    const user = await prisma.aluno.create({
        data: {
            email,
            password,
            nome,
        },
    });

    return user;
};

const login = async (email, password) => {
    const user = await prisma.aluno.findUnique({ where: { email } });
    if (!user || user.password !== password) throw new Error('Credenciais inválidas');

    return user;
};

module.exports = { signup, login };
