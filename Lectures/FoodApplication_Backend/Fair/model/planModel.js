const mongoose = require("mongoose");
const config = require("../configs/config");
// mongodb cloud db 
mongoose.connect(config.DB_LINK, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(function (conn) {
  // console.log("Connection to mongodb established");
  // console.log(conn)
  console.log("Plan Db connected");
}).catch(function (err) {
  console.log(err);
})
// Number string array date
// validator => required,unique
//  non
const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
    trim: true,
    minlength: [5, "A plan name must have atleast 5 Charaters"]
  },
  description: {
    type: String,
    required: [true, "description is required"]
  },
  ratingsAverage: {
    type: Number,
    // in case of no input 
    default: 7,
    min: [1, "Plan rating can't be less than 1"],
    max: [10, "Plan rating can't be  more tha 10"]
  },
  slug: String,
  price: {
    type: Number,
    required: true,
    min: 20
  },
  discount: {
    type: Number,
    // custom validator
    validate: {
      validator: function () {
        return this.price > this.discount
      },
      message: "discount must be less than price"
    }

  }
})
const planModel = mongoose.model("janplanmodel", planSchema);
module.exports = planModel;