const mongoose = require('mongoose');
var MDATABASE = "mongodb+srv://subin:subin@cluster0.lz5qy.mongodb.net/library";
mongoose.connect(MDATABASE ||'mongodb://localhost:27017/Library',{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;
mongoose.set("useFindAndModify", false);// part 2 point 9


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;