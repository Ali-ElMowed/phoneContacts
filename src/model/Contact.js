const { default: mongoose } = require("mongoose");

const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    phone_number: {
        type: Number,
        required: true,

    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        unique: true,
    },
    relation_status: {
        type: String,
    },
    location: {
        type: {
            type: String,
            default: 'Point',
            // required: true
        },
        lang: {
            type: Number,
            // required: true
        },
        lat: {
            type: Number,
            // required: true
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Contact', contactSchema);
