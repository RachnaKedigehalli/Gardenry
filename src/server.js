const express = require('express');
const mongoose = require('mongoose');
const plantRoutes = require('./routes');
const bodyParser = require('body-parser');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://rachna:rachnamongo@projects.rxzui.mongodb.net/Gardenry-DB";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then((client) => {
        // const db = client.db("Gardenry-DB");
        console.log("Connected to the database!");
        app.listen(process.env.port || 4000, function(){
            console.log('listening!');
        });
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.use(bodyParser.json());

app.use(express.static('public'));

// routes
app.use('/', plantRoutes);

/*
// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });
*/
// /*
// error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});
// */