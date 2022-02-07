const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());

/**
 * Creating the db related tables
 */
 const db = require("./models/db");


 db.sequelize.sync({force:true}).then(()=>{
    console.log('tables dropped and recreated');

 /**
  * Importing the routes 
  * */   
 require('./routes/idea.route')(app);

 /**
  * Starting the server
  */
  const PORT = process.env.PORT || 8081;
  app.listen( PORT, () => {
      console.log(`Server is running in the port number ${PORT}`);
  })

    
})