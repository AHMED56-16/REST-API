🚀 Ultimate Rest API

Access the Power of Product Data at Your Fingertips!

📌 API Endpoints - Explore the Features

1️⃣ Get All Products - 🛍️

Endpoint: GET /api/products

Description: Fetches a complete list of all available products.

Use Case: Perfect when you need to display a full catalog of products.

Example Request:
GET https://rest-api-production-3b05.up.railway.app/api/products

Sample Response:


{
  "Products": [
    {
      "name": "IPhone 16 Pro",
      "price": 999,
      "company": "Apple"
    },
    {
      "name": "Samsung Galaxy S24 Ultra",
      "price": 1199,
      "company": "Samsung"
    }
  ],
  "nbHits": 2
}

2️⃣ Filter Products - 🔍

Endpoint: GET /api/products?company={value}&name={value}&featured={true/false}

Description: Filter products by parameters like company, product name, or featured status.

Use Case: Find specific products based on brand or name. You can also filter by featured status for promotions.

Example Requests:

By Company:
GET https://rest-api-production-3b05.up.railway.app/api/products?company=Apple

By Product Name:
GET https://rest-api-production-3b05.up.railway.app/api/products?name=Galaxy

By Featured Status:
GET https://rest-api-production-3b05.up.railway.app/api/products?featured=true

3️⃣ Sort Products - 🔄
Endpoint: GET /api/products?sort={field1},{field2}

Description: Sort products by one or more fields, either in ascending or descending order.

Use Case: Perfect when you need to organize products by price, name, or any other attribute.

Example Requests:

Sort by Price (Ascending):
GET https://rest-api-production-3b05.up.railway.app/api/products?sort=price

Sort by Price (Descending) & Name:
GET https://rest-api-production-3b05.up.railway.app/api/products?sort=-price,name

Sort Key:

price → Ascending

-price → Descending

name → Alphabetical

-name → Reverse Alphabetical

4️⃣ Select Specific Fields - 🎯

Endpoint: GET /api/products?select={field1},{field2}

Description: Specify which fields you want to return in the response for optimized payloads.

Use Case: Retrieve only essential data like product names and prices without unnecessary details.

Example Request:
GET https://rest-api-production-3b05.up.railway.app/api/products?select=name,price

Sample Response:

{
  "Products": [
    {
      "name": "IPhone 14 Pro",
      "price": 999
    },
    {
      "name": "Samsung Galaxy S23 Ultra",
      "price": 1199
    }
  ],
  "nbHits": 2
}

5️⃣ Pagination - 📄

Endpoint: GET /api/products?page={value}&limit={value}

Description: Get a paginated list of products for easy browsing of large datasets.

Use Case: Ideal for displaying large product catalogs with page-based navigation.

Example Request:
GET https://rest-api-production-3b05.up.railway.app/api/products?page=2&limit=5

Pagination Details:

page=2 → Page number (2nd page in this case)

limit=5 → Number of products per page (5 products per page)

6️⃣ Testing Endpoint - ⚙️

Endpoint: GET /api/products/testing

Description: A simple testing endpoint that returns basic product data (name and price).

Use Case: Test your API setup or use it for a quick check of data retrieval.

Example Request:
GET https://rest-api-production-3b05.up.railway.app/api/products/testing

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB

Hosting: Railway.app

ORM: Mongoose

Additional Tools: RESTful architecture for simple yet scalable interaction

📌 How to Run Locally - 🚀

Want to run it locally for development or testing? Here’s how:

Clone the Repository:
git clone https://github.com/AHMED56-16/REST-API

Navigate into the Project Folder:
cd your-repo

Install Dependencies:
npm install

Start the Application:
npm start

Access Locally: Visit http://localhost:5000/api/products to test it out.


