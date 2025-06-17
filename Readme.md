# Recipes CRUD App

## Description
A simple CRUD API for managing recipes using Node.js, Express, MongoDB, and Mongoose. Follows the MVC pattern.

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- Postman (for API documentation)

## Setup Instructions
1. Clone the repo.
2. Run `npm install`.
3. Start server with `npm start`.

## Postman Documentation
Create a Postman collection with these endpoints:

## API Endpoints

| Method | Endpoint                  | Description         |
|--------|---------------------------|---------------------|
| POST   | /v1/recipes/create        | Create a recipe     |
| GET    | /v1/recipes               | Get all recipes     |
| GET    | /v1/recipes/:id           | Get recipe by ID    |
| PUT    | /v1/recipes/update/:id    | Update recipe       |
| DELETE | /v1/recipes/delete/:id    | Delete recipe       |

- 1. Create a new recipe: Send a POST request to `/v1/recipes/create`.
    - Methode: POST
    - Url: {{base_url}}/v1/recipes/create.
    - Body (raw JSON): (Sample Data)
        {
            "name": "Vegetable Pulao",
            "ingredients": ["Basmati Rice", "Carrots", "Peas", "Beans", "Onions", "Spices", "Oil"],
            "instructions": "Heat 2 tbsp oil in a pressure cooker. Add whole spices like bay leaf, cardamom, and cinnamon. Add sliced onions and sauté till golden. Add chopped vegetables and cook for 3-4 minutes. Add soaked rice, salt, and water (1:2 ratio). Close the lid and cook for 2 whistles on medium flame. Let it rest and fluff with a fork before serving.",
            "type": "Veg"
        }
        
    - Sample Response true(Status code:201):
        {
            "message": "Recipe Successfully Created",
            "success": true,
            "result": {
                "name": "Vegetable Pulao",
                "ingredients": [
                    "Basmati Rice",
                    "Carrots",
                    "Peas",
                    "Beans",
                    "Onions",
                    "Spices",
                    "Oil"
                ],
                "instructions": "Heat 2 tbsp oil in a pressure cooker. Add whole spices like bay leaf, cardamom, and cinnamon. Add sliced onions and sauté till golden. Add chopped vegetables and cook for 3-4 minutes. Add soaked rice, salt, and water (1:2 ratio). Close the lid and cook for 2 whistles on medium flame. Let it rest and fluff with a fork before serving.",
                "type": "Veg",
                "_id": "6850fcb284e914c0f38ddb6f",
                "__v": 0
            }
        }

    - Sample Response false(Status code:500):
        {
            "message": "Recipe Creation Error",
            "success": false,
            "error": "recipes validation failed: type: Path `type` is required."
        }


2. Get all recipes: Send a GET request to `/v1/recipes`.
    - Methode: GET
    - Url: {{base_url}}/v1/recipes/.
    - Sample Response true(Status code:200):
        {
            "message": "Recipes GET Request Successfull",
            "success": true,
            "result": [
                {
                    "_id": "6850fcb284e914c0f38ddb6f",
                    "name": "Vegetable Pulao",
                    "ingredients": [
                        "Basmati Rice",
                        "Carrots",
                        "Peas",
                        "Beans",
                        "Onions",
                        "Spices",
                        "Oil"
                    ],
                    "instructions": "Heat 2 tbsp oil in a pressure cooker. Add whole spices like bay leaf, cardamom, and cinnamon. Add sliced onions and sauté till golden. Add chopped vegetables and cook for 3-4 minutes. Add soaked rice, salt, and water (1:2 ratio). Close the lid and cook for 2 whistles on medium flame. Let it rest and fluff with a fork before serving.",
                    "type": "Veg",
                    "__v": 0
                }
            ]
        }   

    - Sample Response false(Status code:500):
        {
            "message": "Error fetching recipe",
            "success": false
        }

3. Get a recipe by ID: Send a GET request to `/v1/recipes/:id.
    - Methode: GET
    - Url: {{base_url}}/v1/recipes/:id.
    - Sample Response true(Status code:200):
        {
            "message": "Recipe Fetched Succussfully",
            "success": true,
            "result": {
                "_id": "6850fcb284e914c0f38ddb6f",
                "name": "Vegetable Pulao",
                "ingredients": [
                    "Basmati Rice",
                    "Carrots",
                    "Peas",
                    "Beans",
                    "Onions",
                    "Spices",
                    "Oil"
                ],
                "instructions": "Heat 2 tbsp oil in a pressure cooker. Add whole spices like bay leaf, cardamom, and cinnamon. Add sliced onions and sauté till golden. Add chopped vegetables and cook for 3-4 minutes. Add soaked rice, salt, and water (1:2 ratio). Close the lid and cook for 2 whistles on medium flame. Let it rest and fluff with a fork before serving.",
                "type": "Veg",
                "__v": 0
            }
        }

    - Sample Response false(Status code:404):
        {
            "message": "Recipe Not Found",
            "success": false
        }

    - Sample Response false(Status code:500):
        {
            "message": "Error fetching recipe",
            "success": false
        }

4. Update a recipe: Send a PUT request to `/v1/recipes/update/:id`.
    - Methode: PUT
    - Url: {{base_url}}/v1/recipes/update/:id.
    - Body (raw JSON): (Sample Data)
        {
            "name":"Vegetable Pulao dish"
        }

    - Sample Response true(Status code:200):
        {
            "message": "Recipe Successfully Updated",
            "success": true,
            "result": {
                "_id": "6850fcb284e914c0f38ddb6f",
                "name": "Vegetable Pulao dish",
                "ingredients": [
                    "Basmati Rice",
                    "Carrots",
                    "Peas",
                    "Beans",
                    "Onions",
                    "Spices",
                    "Oil"
                ],
                "instructions": "Heat 2 tbsp oil in a pressure cooker. Add whole spices like bay leaf, cardamom, and cinnamon. Add sliced onions and sauté till golden. Add chopped vegetables and cook for 3-4 minutes. Add soaked rice, salt, and water (1:2 ratio). Close the lid and cook for 2 whistles on medium flame. Let it rest and fluff with a fork before serving.",
                "type": "Veg",
                "__v": 0
            }
        }
    
    - Sample Response false(Status code:404):
        {
            "message": "Recipe Not Found",
            "success": false
        } 

    - Sample Response false(Status code:500):
        {
            "message": "Recipe update error",
            "success": false
        } 

5. Delete a recipe: Send a DELETE request to `/v1/recipes/delete/:id`.
    - Methode: DELETE
    - Url: {{base_url}}/v1/recipes/delete/:id.
    - Sample Response true(Status code:200 ):
        {
            "message": "Recipe successfully deleted",
            "success": true,
            "result": {
                "_id": "6850fcb284e914c0f38ddb6f",
                "name": "Vegetable Pulao dish",
                "ingredients": [
                    "Basmati Rice",
                    "Carrots",
                    "Peas",
                    "Beans",
                    "Onions",
                    "Spices",
                    "Oil"
                ],
                "instructions": "Heat 2 tbsp oil in a pressure cooker. Add whole spices like bay leaf, cardamom, and cinnamon. Add sliced onions and sauté till golden. Add chopped vegetables and cook for 3-4 minutes. Add soaked rice, salt, and water (1:2 ratio). Close the lid and cook for 2 whistles on medium flame. Let it rest and fluff with a fork before serving.",
                "type": "Veg",
                "__v": 0
            }
        }

    - Sample Response false(Status code:404):
        {
            "message": "Recipe Not Found",
            "success": false
        } 

    - Sample Response false(Status code:500):
        {
            "message": "Recipe Deletion Error",
            "success": false
        } 

This implementation provides a complete CRUD API with proper error handling, validation, and MongoDB integration following MVC architecture. The Postman documentation helps users test and understand the API endpoints.