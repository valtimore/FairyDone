// Un modelo es la forma de decirle a MongoDB que datos guardará, haremos una estructura fija

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Le decimos que este campo es obligatorio
        trim: true, // Elimina espacios en blanco al inicio y al final
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, // Asegura que no haya dos usuarios con el mismo email
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Agrega campos createdAt y updatedAt automáticamente
})

export default mongoose.model('User', userSchema);