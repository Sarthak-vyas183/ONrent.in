const express = require("express");
const mongoose = require("mongoose");
const listingModel = require("./models/listing");
const path = require("path");
const engine = require('ejs-mate');
const app = express();

app.engine('ejs', engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname , "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let mongooseURL = "mongodb://127.0.0.1:27017/wanderlust";

let main = async () => {
    await mongoose.connect(mongooseURL);
};

main().then(() => {
    console.log("Db connected");
}).catch((err) => {
    console.log("mongoose connection failed", err);
});

app.get("/", async (req, res) => {
    const itemdata = await listingModel.find({});
    res.render("listing/index", { itemdata });
});

app.get("/show/:id", async (req, res) => {
    const listing = await listingModel.findOne({ _id: req.params.id });
    res.render("listing/show", { listing });
});

app.get('/listing', async (req, res) => {
    const data = await listingModel.find({});
    res.send(data);
});

app.post("/create", async (req, res) => {
    try {
        const { title, description, image, price, location, country } = req.body;
        const data = await listingModel.create({
            title,
            description,
            image,
            price,
            location,
            country
        });
        console.log(data);
        res.send("success");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/create" , (req , res)=>{
    res.render("listing/create.ejs")
})


app.get("/delete/:id" , async (req ,res)=>{
   const list =  await listingModel.findOneAndDelete({_id : req.params.id});
  res.send(`
   <script>
       alert("Listing Deleted successfully!");
       window.location.href = "/";
   </script>
`);
})

app.get("/edit/:id" , async(req , res)=>{4
    const listing = await listingModel.findOne({ _id: req.params.id });
    res.render("listing/edit" , {listing}); 
})

app.post("/edit/:id", async (req, res) => {
    try {
        const { title, description, image, price, location, country } = req.body;
        const listing = await listingModel.findOneAndUpdate({_id : req.params.id},
            {
                title,
                description,
                image,
                price,
                location,
                country,
               
            },
          
        );
        if (!listing) {
            return res.status(404).send("Listing not found");
        }
         res.redirect(`/show/${listing._id}`)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(8080, () => {
    console.log("app is listening at port 8080");
});
