import jwt from 'jsonwebtoken';
import { verifyPassword } from '../services/user.service.js';
import { saveToken } from '../models/token.model.js';

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await verifyPassword(email, password);
        if(!user) return res.status(401).json({ message: "Verifique sus credenciales"});

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        );

        await saveToken(user.id, token);

        return res
        .status(200)
        .json({ 
            message: "Inicio de sesion exitoso", 
            token: token
        });
    } catch (error) {
        return res
        .status(500)
        .json({ 
            message: "Ocurrio un error", 
            error: error
        });
    }
}