const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const tvShows = sequelize.define("tvShows", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
});

module.exports = tvShows;




// const Movie = sequelize.define("Movie", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     actor: {
//       type: DataTypes.STRING,
//       defaultValue: " Actor Not specified",
//     },
//     year: {
//       type: DataTypes.INTEGER,
//       defaultValue: "Year not specified",
//     },
//   });
  
//   module.exports = Movie;