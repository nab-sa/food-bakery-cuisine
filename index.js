const express = require('express');
const mongoose = require('mongoose')
const app = express();

const port = process.env.PORT || 5000
app.use(express.urlencoded({extended:true}))
app.use(express.json());

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/food-bakery-cuisine');
    console.log("MongoDB connected");
}

main().catch(err => console.log(err));

const courseRoute = require('./routes/courseRoute')
const subcriberRoute = require('./routes/subscriberRoute')

app.use("/courses", courseRoute)
app.use("/subscriber", subcriberRoute)


app.listen(port, () => {
    console.log(`FBC server is running on port: ${port}`);
})