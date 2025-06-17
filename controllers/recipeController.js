// Import RecipesModel
const RecipesModel = require("../models/recipeModle");


// Create a recipe
async function createRecipe(req, res, next){
    try {
        const recipe = new RecipesModel(req.body);
        const result = await recipe.save();
        return res.status(201).json({
            message:"Recipe Successfully Created",
            success: true,
            result
        })
    } catch (error) {
        return res.status(500).json({
            message:"Recipe Creation Error",
            success: false,
            error: error.message
        })
    }
}

// Get all recipes
async function getAllRecipes(req, res, next){
    try {
        const result = await RecipesModel.find();
        return res.status(200).json({
            message:"Recipes GET Request Successfull",
            success: true,
            result
        })
    } catch (error) {
        return res.status(500).json({
            message:"Recipes GET Request Error Occured",
            success: false,
            error: error.message
        })
    }
}

// Get recipe by ID
async function getRecipeById(req, res, next){
    try {
        const result = await RecipesModel.findById(req.params.id);
        if(!result){
            return res.status(404).json({
            message:"Recipe Not Found",
            success: false,
        })
        }
         return res.status(200).json({
            message:"Recipe Fetched Succussfully",
            success: true,
            result
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error fetching recipe",
            success: false,
            error: error.message
        })
    }
}

// Update recipe
async function updateRecipe(req, res, next){
    try {
        const result = await RecipesModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!result){
            return res.status(404).json({
                message:"Recipe Not Found",
                success: false
            })
        }
        return res.status(200).json({
            message:"Recipe Successfully Updated",
            success: true,
            result
        })
    } catch (error) {
        return res.status(500).json({
            message:"Recipe update error",
            success: false,
            error: error.message
        })
        
    }
}

// Delete recipe
async function deleteRecipe(req, res, next) {
    try {
        const result = await RecipesModel.findByIdAndDelete(req.params.id)
        if(!result){
            return res.status(404).json({
                message: "Recipe Not Found",
                success: false
            })
        }
        return res.status(200).json({
            message:"Recipe successfully deleted",
            success: true,
            result
        })
    } catch (error) {
        return res.status(500).json({
            message:"Recipe Deletion Error",
            success: false,
            error: error.message
        })
    }
}

// Export CRUD Request
module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}