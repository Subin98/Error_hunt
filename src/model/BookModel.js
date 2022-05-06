const mongoose = require('mongoose');
var MDATABASE = "mongodb+srv://subin:subin@cluster0.lz5qy.mongodb.net/library";
mongoose.connect(MDATABASE || 'mongodb://localhost:27017/Library',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useFindAndModify", false);// part 2 point 9
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;