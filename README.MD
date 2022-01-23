# BookStore Rest API
**Node.js**

**Express**

**MongoDB**

## GET
````
/v1/api/books
````
## POST
````
{
"name": "Book Name",

"author": "Author",

"year": 2021
}

/v1/api/books
````
## PATCH 
````
{
"name": "Book Name",

"author": "Author",

"year": 2021
}

/v1/api/books/:id
````
## DELETE 
````
/v1/api/books/:id
````

## Docker
````
docker pull mertgundoganx/node-bookstore-rest-api
docker run -p 3000:3000 <image-id>
````
