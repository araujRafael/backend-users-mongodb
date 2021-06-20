const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/noderest",{
    // useMongoClient:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, err => {
    if(err){
        console.log(err);
    }else{
        console.log("MongoDB connected");
    }
})
// .then(()=>{
//     console.log("MongoDB connected");
// }).catch(err => {
//     console.log(err);
// })
// mongoose.Promise = global.Promise;

module.exports = {mongoose}