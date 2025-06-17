const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { RecipesRouter } = require('./routes/recipeRoutes');
const connectDB = require('./config/db');

// DB connection
dotenv.config();
connectDB();

// Create a server
const HTTP_Server = express();

// Middleware
HTTP_Server.use(express.json())

// Start Server
const PORT = process.env.PORT || 5000;

HTTP_Server.listen(PORT,'0.0.0.0',() => {
    try {
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.log("Server Connection Error", error)
    }
})

// Router
HTTP_Server.use("/v1/recipes", RecipesRouter)

HTTP_Server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'documentation.html'));
});