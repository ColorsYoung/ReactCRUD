const express = require("express")// นำเข้า express แบ้วมาเก็บไว้ที่ตัวแปร express
const { readdirSync } = require("fs")

const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')

// http://localhost:5000/api/product
const app = express();

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit:'10mb'}))



readdirSync('./Routes')
    .map((r)=> app.use('/api',require('./Routes/'+r)))


app.listen(5000, () => console.log("Server Running 5000"));