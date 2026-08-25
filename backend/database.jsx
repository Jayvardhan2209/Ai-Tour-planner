const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tour");
        console.log("Connected to Mongo Successfully");
    } 
    catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongo;