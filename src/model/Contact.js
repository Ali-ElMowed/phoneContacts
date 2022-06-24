const { default: mongoose } = require("mongoose");

const contactSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    phone_number: {
        type: Number,
        required: true,
        min:8,
        max:16,
    },
    email:{
        type: String,
        required: true,
        min: 6,
        max: 255,
        unique: true,
    },
    location:{
        type: Number,
        coordinates: [longitude, latitude]
    }
})












module.exports = mongoose.model('User', userSchema);
