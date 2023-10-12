// color.model.js

module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define("color", {
      name: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      }
    });
  
    return Color;
  };