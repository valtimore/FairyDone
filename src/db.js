import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/merndb');
        console.log('Conexión a MongoDB exitosa');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error.message);
    }
};
