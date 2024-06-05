const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname : {
        type : String,
        require : true,
        trim : true,
        index : true,
       },
       username : {
        type : String,
        require : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true,
       },
        email : {
        type : String,
        require : true,
        unique : true,
        lowercase : true,
        trim : true,
        
       },
     coverImage : {
        type : String,
        default : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
       }, 

       list  :[ {
        type : Schema.Types.ObjectId,
        ref : "listing",
       }
    ],

     password : {
        type : String,
        require : [true , "password is required"]
     },

     isadmin : {
         type : Boolean,
         default : false
     },

     rmpcertificate : String,
    
});

module.exports = mongoose.model('User', userSchema);