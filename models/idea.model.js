module.exports = (sequelize, Sequelize) => {

    const Idea = sequelize.define("ideas", {
        id: {
            type : Sequelize.INTEGER,
            autoIncrement: "true",
            primaryKey: true
        },
        author :{
            type : Sequelize.STRING,
            allownull : false
        },
        name :{
            type : Sequelize.STRING,
            allownull : false
        },

        description :{
            type : Sequelize.STRING
            
        }
    })

    return Idea;

}