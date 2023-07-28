const mongoose = require("mongoose");
dbConnect()
async function dbConnect() {
    try {
        await mongoose.connect('');
        console.log("Connected to Database")
    } catch (err) {
        console.log("Database Connection Failed")
    }

}

module.exports = mongoose