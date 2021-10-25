const Mongoose = require('mongoose');

Mongoose.connection.once("open", () => {
    console.log("Mongoose DB Connection is Successful!")
});

Mongoose.connection.once("error", () => {
    console.log("MongoDB Connection is Failed!")
});

const connectDB = async () => {
    await Mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_DATABASE}.uvc5x.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    connectDB
}
