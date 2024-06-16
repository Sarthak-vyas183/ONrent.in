
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
   listId : {
    type : Schema.Types.ObjectId,
    ref : "listing",
   },
   userId : {
    type : Schema.Types.ObjectId,
    ref : "user",
   },
   username : {
      type : String
   },
   isDoctor : {
      type : Boolean,
      default : false
   },
   message : {
    type : String
   }
})

module.exports = mongoose.model("review" , reviewSchema);