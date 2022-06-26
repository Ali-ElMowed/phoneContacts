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
    relation_status:{
        type:String,
    },
    location:{
        type: {
            type: String,
            enum:['Point'],
            // required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'  
    }
})

module.exports = mongoose.model('Contact', contactSchema);
