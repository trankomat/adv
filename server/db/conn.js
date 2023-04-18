const mongoose = require('mongoose');

// db name is Advertisement
const dbConnection = async (url) => {
    try {
        await mongoose.connect(`${url}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to database');
    }

}

module.exports = dbConnection;
