const { getAllRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

// Create a router
const RecipesRouter = require('express').Router();

// Sub -routes

// POST Request - Create a new recipe
RecipesRouter.post("/create", createRecipe);

// GET Request - Get all recipes
RecipesRouter.get("/", getAllRecipes);

// GET Request - Get a recipe using id
RecipesRouter.get("/:id", getRecipeById);

// PUT Request - Update a recipe
RecipesRouter.put("/update/:id", updateRecipe);

// DELETE Request - Delete a recipe
RecipesRouter.delete("/delete/:id", deleteRecipe);

// Exports RecipesRouter
module.exports = {
    RecipesRouter
}