import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import './db.js';


dotenv.config();

const port = process.env.PORT || 5000;

const app = express();



app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);


app.listen(port, () => console.log(`Server running on port ${port}`));