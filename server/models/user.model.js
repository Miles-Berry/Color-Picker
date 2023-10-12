// user.model.js

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING
      },
      tiles: {
        type: Sequelize.STRING
      },
    });
  
    return User;
  };