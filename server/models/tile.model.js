// tile.model.js

module.exports = (sequelize, Sequelize) => {
    const Tiles = sequelize.define("tiles", {
      name: {
        type: Sequelize.STRING
      },
      colors: {
        type: Sequelize.STRING
      }
    });
  
    return Tile;
  };