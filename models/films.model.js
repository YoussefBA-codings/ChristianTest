'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
  	Film.init({
  	  id: {
		type: DataTypes.INTEGER,
		unique: {
		  msg: 'the film already exist'
		}
	  },
	  url: {
		type: DataTypes.STRING,
	  },
      title: {
		type: DataTypes.STRING,
	  },
      description: {
		type: DataTypes.TEXT,
	  },
      format: {
		type: DataTypes.STRING,
	  },
      episodes: {
		type: DataTypes.INTEGER,
	  },
      duration: {
		type: DataTypes.STRING,
	  },
      chapters: {
		type: DataTypes.INTEGER,
	  },
      volumes: {
		type: DataTypes.STRING,
	  },
      endDate: {
		type: DataTypes.STRING,
	  }

  	}, {
  	  sequelize,
  	  modelName: 'Film',
  	  updatedAt: false,
  	  createdAt: false
  	});
  	return Film;
};