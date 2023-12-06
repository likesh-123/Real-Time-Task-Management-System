const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/connect-database');
const decodeJWTTokenMiddleware = require('./middlewares/decode-jwt-middleware')

//routes
const userRouter = require('./routes/user-routes')

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());

app.use('/api', userRouter)

// middleware to decode the jwt token
app.use(decodeJWTTokenMiddleware);

// app.use('/api/user', userRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
