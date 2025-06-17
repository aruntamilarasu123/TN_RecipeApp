# 🍽️ Recipes CRUD API

A simple RESTful API for managing recipes using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**, following the **MVC pattern**.

---

## 🚀 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB** with **Mongoose**
* **Postman** (for API testing & documentation)

---

## 📦 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/aruntamilarasu123/TN_RecipeApp.git
   cd tnrecipeapp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   ```

> Make sure your MongoDB instance is running or provide a valid MongoDB URI in your environment variables.

---

## 📮 API Endpoints

Base URL: `{{base_url}}`

| Method | Endpoint                 | Description         |
| ------ | ------------------------ | ------------------- |
| POST   | `/v1/recipes/create`     | Create a new recipe |
| GET    | `/v1/recipes`            | Get all recipes     |
| GET    | `/v1/recipes/:id`        | Get recipe by ID    |
| PUT    | `/v1/recipes/update/:id` | Update a recipe     |
| DELETE | `/v1/recipes/delete/:id` | Delete a recipe     |

---

## 📘 Endpoint Details

### 1. Create a Recipe

* **Method:** `POST`
* **URL:** `/v1/recipes/create`
* **Body (JSON):**

```json
{
  "name": "Vegetable Pulao",
  "ingredients": ["Basmati Rice", "Carrots", "Peas", "Beans", "Onions", "Spices", "Oil"],
  "instructions": "Heat 2 tbsp oil in a pressure cooker...",
  "type": "Veg"
}
```

#### ✅ Success Response `201`

```json
{
  "message": "Recipe Successfully Created",
  "success": true,
  "result": {
    "_id": "6850fcb284e914c0f38ddb6f",
    ...
  }
}
```

#### ❌ Error Response `500`

```json
{
  "message": "Recipe Creation Error",
  "success": false,
  "error": "recipes validation failed: type: Path `type` is required."
}
```

---

### 2. Get All Recipes

* **Method:** `GET`
* **URL:** `/v1/recipes`

#### ✅ Success Response `200`

```json
{
  "message": "Recipes GET Request Successful",
  "success": true,
  "result": [...]
}
```

#### ❌ Error Response `500`

```json
{
  "message": "Error fetching recipe",
  "success": false
}
```

---

### 3. Get a Recipe by ID

* **Method:** `GET`
* **URL:** `/v1/recipes/:id`

#### ✅ Success Response `200`

```json
{
  "message": "Recipe Fetched Successfully",
  "success": true,
  "result": { ... }
}
```

#### ❌ Error Response `404`

```json
{
  "message": "Recipe Not Found",
  "success": false
}
```

#### ❌ Error Response `500`

```json
{
  "message": "Error fetching recipe",
  "success": false
}
```

---

### 4. Update a Recipe

* **Method:** `PUT`
* **URL:** `/v1/recipes/update/:id`
* **Body (JSON):**

```json
{
  "name": "Vegetable Pulao dish"
}
```

#### ✅ Success Response `200`

```json
{
  "message": "Recipe Successfully Updated",
  "success": true,
  "result": { ... }
}
```

#### ❌ Error Response `404`

```json
{
  "message": "Recipe Not Found",
  "success": false
}
```

#### ❌ Error Response `500`

```json
{
  "message": "Recipe update error",
  "success": false
}
```

---

### 5. Delete a Recipe

* **Method:** `DELETE`
* **URL:** `/v1/recipes/delete/:id`

#### ✅ Success Response `200`

```json
{
  "message": "Recipe successfully deleted",
  "success": true,
  "result": { ... }
}
```

#### ❌ Error Response `404`

```json
{
  "message": "Recipe Not Found",
  "success": false
}
```

#### ❌ Error Response `500`

```json
{
  "message": "Recipe Deletion Error",
  "success": false
}
```

---

## 📂 Project Structure (MVC)

```
tnresipeapp/
├── config/
│   └── db.js
├── controllers/
│   └── recipeController.js
├── models/
│   └── recipeModel.js
├── routes/
│   └── recipeRoutes.js
└── index.js
```

---

## 🧪 API Testing with Postman

1. Open [Postman](https://www.postman.com/)
2. Create a new collection called **"Recipes API"**
3. Add the above endpoints and test with sample JSON bodies
4. Save your environment with a `{{base_url}}` variable for easy switching

---