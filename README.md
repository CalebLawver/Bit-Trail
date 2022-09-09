# Bit-Trail

Deployed URL:

## About Bit Trail

We wanted an application that allows users to post some hikes they have done so they can share such info to others. Users will log in or create an account first, and once they do they can enter the information for the trail they have hiked: name of the trail, length of the trail in miles or kilometers, and the address to the trail. Users also can enter a quick blurb on what they thought of the trail as well.

## How we accomplished this

We used a plethora of technologies which included Node.js and Express.js. Other technologies used include:

- Joi
- Handlebars.js
- MySQL and Sequelize ORM
- Use of GET and POST routes for retrieving and adding new data

## How to run app

- login to mysql, enter source db/schema.sql, use bittrail_db, back in the terminal run npm seeds, then npm start
- **Not Necessary** npm i express sequelize mysql2 handlebars express-handlebars dotenv bcrypt joi
- npm seeds will populate tables
- npm start will run server.js

## End Product

https://bit-trail.herokuapp.com/
