const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');
const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express();
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use('/', routesHandler);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});



/* const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

const databaseId = process.env.NOTION_DATABASE_ID;

(async () => {
    const response = await notion.databases.retrieve({
      database_id: databaseId
    });
    console.log(response);
  })(); */

