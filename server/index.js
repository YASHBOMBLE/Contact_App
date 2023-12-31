import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
dotenv.config(); 
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to MongoDB');
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})