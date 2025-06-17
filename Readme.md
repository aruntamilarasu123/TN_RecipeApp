# 🍽️ Recipes CRUD API

A robust RESTful API for managing recipes, built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**, following the **MVC architecture** for clean, scalable code.

---

## 🌐 API Base URL

```
https://tn-recipe-api.onrender.com/
```

---

## 🚀 Technology Stack

* **Node.js** – JavaScript runtime environment
* **Express.js** – Fast, minimalist web framework for Node.js
* **MongoDB** – NoSQL database for flexible data storage
* **Mongoose** – Elegant MongoDB object modeling for Node.js
* **Postman** – API testing and documentation tool

---

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/aruntamilarasu123/TN_RecipeApp.git
   cd TN_RecipeApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Ensure your MongoDB URI is set in the environment variables, e.g., in a `.env` file:

   ```
   MONGO_URI=<your_mongodb_connection_string>
   PORT=5000
   ```

4. **Start the server**

   ```bash
   npm start
   ```

> Your API server will be running at `http://localhost:5000` (or the configured PORT).

---

## 📮 API Endpoints

| Method | Endpoint                 | Description           |
| ------ | ------------------------ | --------------------- |
| POST   | `/v1/recipes/create`     | Create a new recipe   |
| GET    | `/v1/recipes`            | Retrieve all recipes  |
| GET    | `/v1/recipes/:id`        | Retrieve recipe by ID |
| PUT    | `/v1/recipes/update/:id` | Update a recipe       |
| DELETE | `/v1/recipes/delete/:id` | Delete a recipe       |

---

## 📘 Endpoint Details

### 1. Create a Recipe

* **Method:** POST
* **URL:** `/v1/recipes/create`
* **Request Body:**

```json
{
  "name": "Vegetable Pulao",
  "ingredients": ["Basmati Rice", "Carrots", "Peas", "Beans", "Onions", "Spices", "Oil"],
  "instructions": "Heat 2 tbsp oil in a pressure cooker...",
  "type": "Veg"
}
```

* **Success Response:** `201 Created`

```json
{
  "message": "Recipe Successfully Created",
  "success": true,
  "result": {
    "_id": "6850fcb284e914c0f38ddb6f",
    "name": "Vegetable Pulao",
    ...
  }
}
```

* **Error Response:** `500 Internal Server Error`

```json
{
  "message": "Recipe Creation Error",
  "success": false,
  "error": "recipes validation failed: type: Path `type` is required."
}
```

---

### 2. Get All Recipes

* **Method:** GET

* **URL:** `/v1/recipes`

* **Success Response:** `200 OK`

```json
{
  "message": "Recipes GET Request Successful",
  "success": true,
  "result": [ /* array of recipes */ ]
}
```

* **Error Response:** `500 Internal Server Error`

```json
{
  "message": "Error fetching recipe",
  "success": false
}
```

---

### 3. Get Recipe by ID

* **Method:** GET

* **URL:** `/v1/recipes/:id`

* **Success Response:** `200 OK`

```json
{
  "message": "Recipe Fetched Successfully",
  "success": true,
  "result": { /* recipe object */ }
}
```

* **Error Responses:**

  * `404 Not Found`

  ```json
  {
    "message": "Recipe Not Found",
    "success": false
  }
  ```

  * `500 Internal Server Error`

  ```json
  {
    "message": "Error fetching recipe",
    "success": false
  }
  ```

---

### 4. Update a Recipe

* **Method:** PUT
* **URL:** `/v1/recipes/update/:id`
* **Request Body:** (partial or full update)

```json
{
  "name": "Vegetable Pulao dish"
}
```

* **Success Response:** `200 OK`

```json
{
  "message": "Recipe Successfully Updated",
  "success": true,
  "result": { /* updated recipe object */ }
}
```

* **Error Responses:**

  * `404 Not Found`

  ```json
  {
    "message": "Recipe Not Found",
    "success": false
  }
  ```

  * `500 Internal Server Error`

  ```json
  {
    "message": "Recipe update error",
    "success": false
  }
  ```

---

### 5. Delete a Recipe

* **Method:** DELETE

* **URL:** `/v1/recipes/delete/:id`

* **Success Response:** `200 OK`

```json
{
  "message": "Recipe successfully deleted",
  "success": true,
  "result": { /* deleted recipe object */ }
}
```

* **Error Responses:**

  * `404 Not Found`

  ```json
  {
    "message": "Recipe Not Found",
    "success": false
  }
  ```

  * `500 Internal Server Error`

  ```json
  {
    "message": "Recipe Deletion Error",
    "success": false
  }
  ```

---

## 🏗️ Project Structure (MVC)

```
tnrecipeapp/
├── config/
│   └── db.js              # Database connection setup
├── controllers/
│   └── recipeController.js # Route handlers and business logic
├── models/
│   └── recipeModel.js      # Mongoose schema and model
├── routes/
│   └── recipeRoutes.js     # Express route definitions
├── views/
│   └── documentation.html    # Views for UI
└── index.js                # Entry point of the application
```

---

## 🧪 API Testing with Postman

1. Download and open [Postman](https://www.postman.com/).
2. Create a new collection named **"Recipes API"**.
3. Add the endpoints listed above.
4. Use `{{base_url}}` as a variable for the API base URL to easily switch environments.
5. Test each endpoint using sample JSON bodies as provided.

---

## 📞 Support

For issues, questions, or feature requests, please open an issue on the [GitHub repository](https://github.com/aruntamilarasu123/TN_RecipeApp/issues).

---

## ⚖️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*Created with ❤️ by Arun Tamilarasu*

---
