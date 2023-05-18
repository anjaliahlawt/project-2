This is the base  node js project template , which anyone can use as it has been prepared ,by keeping some of the most important code prinicipal and  project managment recomodations . feel free to change anything.

`src`  -> inside the src folder all the actual source code regarding the  project will reside ,this will not  include any kind of tests .(you might want to make seprate tests folder).

lets take  a look inside  the src folder

`config` -> In this folder anything and everything regarding any configurations setup of a library or module will be done.for example : setting up `dotenv` so that we can use  the enviornment variable anywhere in a cleaner fashion ,this is done in the `server-config`.one more  example can be setup you logging library that can help you to prepare meaningful logs,so configuration for this library should be done here.

`routes` -> In the routes folder , we register a route and the corresponding middleware and the controllers 
to  it.

`middlewares` -> They are just going to intercept the incoming requests where we can write our validators ,authenicators etc.

`controllers` -> They are the kind of the lat middlewares as post them you call you business layer to execute the business logic. in controllers we just recieve the incoming requests and the data and then pass to it the business layer return an output , we structure the API  response in controolers and send the output.

`repositories` -> This folder contains all the logic using which we intreact the DB by writing queries , all the raw queries or ORM queries will go here.

`services` -> contains the business logic and the intreacts with respositories for data from the database.

`utils` -> contains  helper methods ,error classes etc.

### SET UP THE PROJECT 
-Download this template from github and open it in your favourite text editor .
-In the root directory create a `.env` file and add the folllwing env variable

PORT=< port number of your choice>

example: PORT =3000;

-Inside the `src/config ` folder create a file name as `config.json` and write the following codes:
{

  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
-if you are setting up your development enviornment ,then write the user name of your DB,password of your db and in dialect mention whatever db you are using for ex:mysql,mariadb etc.
-If you are setting up test or prod enviornment , make sure you also replace the host with the hosted db url.
