Setup:

1- Install Node.js by downloading its package.

2- Install Nest.js using command in your terminal npm i -g @nestjs/cli (Select npm).

3- To run the Project type npm start

Tutorial

1- You can create all CRUD controllers and services in one command nest g resource products

2- To create each separately nest g module product, nest g service product and nest g controller product

3- Modules are the components of each project where each modules has its own routes, controller, services and entities

4- Controller handles all the routes and requests of a module and route them to their respective service function and logic.

5- Services handles all the logic and database CRUD functions to manipulate the database and retrieve data.

6- Entites are like the modals of each database table giving it a proper structure in the application.

7- DTO(Data Transfer Object) are used to validate the data while passing it accross the application.

8- Pipes can be used in the DTOs to validate the structure of the Data coming from Api and can also be used to Parse incoming data to required data type.
