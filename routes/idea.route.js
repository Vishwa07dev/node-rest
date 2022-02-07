const ideasController = require("../controller/ideaController");

module.exports = function(app){

    console.log(ideasController.create);
    app.post("/api/v1/ideas" , ideasController.create);
    app.get("/api/v1/ideas" , ideasController.findAll);
    app.get("/api/v1/ideas/:id", ideasController.findOne);
    app.get("/api/v1/ideas?author=xyz", ideasController.findByAuthor);
}