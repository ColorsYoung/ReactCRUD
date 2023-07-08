const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1/datademo')
        console.log('DB Connect')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB