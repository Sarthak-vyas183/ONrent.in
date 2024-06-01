const mongoose = require("mongoose");
const initdata = require("./initialData");
const listingModel = require("../models/listing");

let mongooseURL = "mongodb://127.0.0.1:27017/wanderlust"

let main = async ()=>{
    await mongoose.connect(mongooseURL)
   }

  main().then(()=>{
      console.log("Db connected")
  }).catch((err)=>{
     console.log("mongoose connection failed");
  })

  const initDB =  async()=> {
      await listingModel.deleteMany({});
      await listingModel.insertMany(initdata.data);
      console.log('data was initialized');
      console.log(initdata.data)
  }
   initDB()