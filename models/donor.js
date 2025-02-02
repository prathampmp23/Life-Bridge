const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonorSchema = new Schema({
    id: Number,
    name: String,
    bloodGroup: String,
    region: String,
    district: String,
    status: String,  // "AVAILABLE" or "UNAVAILABLE"
    mobile: String
});

module.exports= mongoose.model("Donor",DonorSchema);