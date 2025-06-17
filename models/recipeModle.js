//Import mongoose
const mongoose = require('mongoose');

// Schema Define
const RecipesSchema = mongoose.Schema({
    name: { type:String, required: true },
    ingredients: { type: Array, required: true },
    instructions: { type: String, required: true },
    type: { type: String, required: true, enum: ['Veg','Non-Veg'] },
}, { timestampes:true } );

// Create a Model
const RecipesModel = mongoose.model("recipes", RecipesSchema);

// Export RecipesModle
module.exports = RecipesModel;