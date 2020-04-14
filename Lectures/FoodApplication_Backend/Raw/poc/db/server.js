const express = require("express");
const app = express();
const mongoose = require("mongoose");
// mongodb cloud db 
mongoose.connect("mongodb+srv://admin:1234abc@cluster0-ufy4c.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(function (conn) {
  console.log("Connection to mongodb established");
  // console.log(conn)
}).catch(function (err) {
  console.log(err);
})
// schema=> set of rules => every entity will follow
// speceifications
const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "A plan Should have more than 40 characters"],
    trim: true,
    unique: true
  },
  model: {
    type: Number
  },
  price: {
    type: Number,
    required: true,
  }
})
// prototype 
app.use(express.json());
const carModel = mongoose.model("janmodel", carSchema);
// routes
app.route("").get(getAllCars).post(createCar)
app.route("/:id").get(getCar).patch(updateCar).delete(removeCar)
async function getAllCars(req, res) {
  // get all cars
  try {
    const cars = await carModel.find();
    res.status(200).json({
      cars,
      status: "Successfull"
    })
  }
  catch (err) {
    console.log(err);
  }
}

async function createCar(req, res) {
  // 
  try {
    const NewCar = await carModel.create(req.body);
    res.status(201).json({
      NewCar
    })
  } catch (err) {
    console.log(err);
  }
}
async function updateCar(req, res) {
  try {
    const { id } = req.params;
    const car = await carModel.findById(id);
    // keys update 
    const keys = Object.keys(req.body);
    for (let key in keys) {
      car[key] = req.body[key]
    }
// object save db
    await car.save();
    res.status(200).json({
      status: "Successfull",
      car
    })
  } catch (err) {
    console.log(err);
  }
}

async function getCar(req, res) {
  const { id } = req.params;
  const car = await carModel.findById(id);
  res.status(200).json({
    status: "successfull",
    car
  })
}

async function removeCar(req, res) {
  const { id } = req.params;
  await carModel.findByIdAndDelete(id);
  const cars = await carModel.find();
  res.status(200).json({
    status: "successfull",
    cars
  })
}

app.listen(4000, function () {
  console.log("Server is listening at port 4000");
})








// name:{
//   type:String,
//   required:true,
//   maxlength:[10,"A plan Should have more than 40 characters"],
//   trim:true,
//   unique:true
// },description:{
// type:String,
// minlength:[40, "description should have minimum of 40 charcters"]
// },
// maxRating:{
//   type:Number,

// }