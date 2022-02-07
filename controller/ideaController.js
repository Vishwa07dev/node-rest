const db = require('../models/db');
const Idea = db.idea ;


//create  a new ideas
exports.create = (req, res) => {
   const idea = {
       author : req.body.author,
       name : req.body.name,
       description : req.body.description,

   }

   Idea.create(idea).then(data =>{
       res.status(201).send(data);
   }).catch(err=>{
       res.status(500).send({
           message : err.message || "Some error while creating a new idea"
       });
   });


};

//Get all the ideas
exports.findAll = (req, res) =>{
    console.log("Inside the find all");
    Idea.findAll().then(ideas =>{
        res.status(200).send(ideas);
    }).catch(err =>{
        res.status(500).send({
            message : err.message || "Some error while searching all the ideas"
        });
    })
}

//Search an idea based on the id
exports.findOne = (req, res) =>{
    console.log("Inside the findOne");
    const id = parseInt(req.params.id) ;
    

    Idea.findByPk(id).then(idea =>{
        res.status(200).send(idea);
    }).catch(err =>{
        res.status(500).send({
            message : err.message || "Some error while searching all the ideas"
        });
    })
}

//Search an idea based on the name
exports.findByAuthor = (req, res) =>{
    const name  = req.query.author ;
    console.log("Name requested is ")

    Idea.findAll({
        where : {
            author : name
        }
    }).then( idea =>{
        es.status(200).send(idea);
    }).catch(err =>{
        res.status(500).send({
            message : err.message || "Some error while searching all the ideas"
        });
    })
}

