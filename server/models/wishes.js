const mongoose = require('mongoose')

const WishesSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    wishes: {
        type: Array
    }
})

const Wishes = mongoose.model('Wishes', WishesSchema)

module.exports = Wishes
