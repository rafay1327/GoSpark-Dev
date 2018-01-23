var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance

const Tag = sequelize.define('Tag', {

	// category_id:{
	// 	type: Sequelize.INTEGER,
	// 	autoIncrements: true,
	// 	primaryKey: true,
	// 	allowNull: false
	// },
	description: {
		type:  Sequelize.STRING, 
		allowNull: false
	}


},
{
	timestamps: false
}
);

sequelize.sync();

module.exports = Tag;



