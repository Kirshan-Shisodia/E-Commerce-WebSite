const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const stripeRoute = require("./routes/stripe");
const cors = require("cors");


const app = express();
dotenv.config();

// mongoose.connect('mongodb+srv://admin:admin@cluster0.l6kufww.mongodb.net/shop?retryWrites=true&w=majority')
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('DB Connection Successfull!'))
.catch((err)=> {
    console.log(err)
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 3005, ()=>{
    console.log('backend is running!')
});