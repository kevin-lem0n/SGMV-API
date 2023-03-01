# SGMV-API
Singapore Mobile Number Validation API.
API for checking the format validity of Singapore mobile number, an alternative to regex (Regular Expression).

[Demo Website](https://sgmv-api.kevinlem0n.repl.co/) (Can be tested by using **Postman**).

For documentation purposes, testing will be from `localhost:3000`.

When a GET request is sent to any `localhost:3000`, a message will be returned indicating that the API is working correctly.
![image](https://user-images.githubusercontent.com/126497052/222047180-01e231e6-1e76-464c-98ad-69f42430dd6b.png)

To validate a mobile number, send a **HTTP GET** request to `localhost:3000/check/<mobile_number>`
`<mobile_number>` is the parameter to pass in.

When a **GET** request is sent **without** any parameter e.g `localhost:3000/check/`, an **error** message will be returned.
![image](https://user-images.githubusercontent.com/126497052/222047349-d2a44e48-b20b-4c62-901c-db7d45c8cffd.png)

When a **GET** request is sent **with** a correct parameter e.g `localhost:3000/check/98765432`, an **success** message will be returned.
![image](https://user-images.githubusercontent.com/126497052/222047755-c17f68c1-2791-4725-8749-da895e90221e.png)

When a **GET** request is sent **with** an incomplete mobile number e.g `localhost:3000/check/9876543`(missing 1 number), an **error** message will be returned.
![image](https://user-images.githubusercontent.com/126497052/222048071-f9beab76-38fd-4117-9625-3179c79b979b.png)

When a **GET** request is sent **with** an invalid mobile number e.g `localhost:3000/check/123`(invalid), an **error** message will be returned.
![image](https://user-images.githubusercontent.com/126497052/222049038-f89f91b0-e340-4a5e-aaeb-84a5f8752897.png)

When a **GET** request is sent **with** a mobile number that is too long e.g `localhost:3000/check/987654321`(more than 8 digits), an **error** message will be returned.
![image](https://user-images.githubusercontent.com/126497052/222048910-5350bc7c-e969-4862-b3f7-02afc6a593a1.png)

When a **GET** request is sent to an invalid link e.g `localhost:3000/1234 `(link does not exists), an **error 404 page** will be returned.
![image](https://user-images.githubusercontent.com/126497052/222050277-86de65f0-0e00-41a9-9050-f070135c67e4.png)

The end.
