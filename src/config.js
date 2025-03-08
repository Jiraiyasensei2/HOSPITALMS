const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://kpatel052btech2023:356567@cluster0.duncw.mongodb.net/users");
 
connect.then(()=>{
    console.log("logged in");
})
.catch(()=>{
    console.log("Failed");
}
);
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required :true
    },
    email: {
        type: String,
        required :true
    },
    password: {
        type: String,
        required :true
    }
    
    
});
  

const collection = new mongoose.model("users",LoginSchema);
module.exports = collection;