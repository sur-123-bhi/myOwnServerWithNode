const mongoose = require("mongoose");
require("dotenv").config();

const connectionWithDB = mongoose.connect(process.env.mongoURL);

module.exports={
    connectionWithDB,
}
