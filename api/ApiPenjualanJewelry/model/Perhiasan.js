const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    kodePerhiasan: {
        type: String
    },
    jenisPerhiasan : {
        type: String
    },
    kadarPerhiasan : {
        type: String
    },
    beratPerhiasan : {
        type: String
    },
    hargaPerhiasan : {
        type: String
    },
    gambar: {
        type: String
    }
})

module.exports = mongoose.model('perhiasan', userSchema)
