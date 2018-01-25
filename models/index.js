var Store = require('./Store')
var Business = require('./Business')
var Location = require('./Location');
var Deal = require('./Deal');
var Category = require('./Category');
var Review = require('./Review');
var Beacon = require('./Beacon');
var tag = require('./tag')
var User = require('./User')
var Membership = require('./Membership')
var Earning = require('./Earning')
var Gallery = require('./Gallery')
var Badge = require('./Badge');
var BusinessTag = require('./BusinessTag');
var UserDeal = require('./Wishlist');
var BusinessBadge = require('./BusinessBadge');



console.log(Business);
console.log(Deal);
console.log(Location);
console.log(Membership);
console.log(User);
console.log(tag);
console.log(Badge);
console.log(Gallery);
console.log(Earning);
console.log(Review);
console.log(Category);
console.log(Beacon);
console.log(Store);
console.log(BusinessBadge);
console.log(UserDeal);
console.log(BusinessTag);

Business.hasMany(Deal, { foreignKey: { allowNull: false }});
Deal.belongsTo(Business);

Location.hasMany(Store, { foreignKey: { allowNull: false }});
Store.belongsTo(Location);

Store.hasMany(Beacon , { foreignKey: { allowNull: false }});
Beacon.belongsTo(Store);

Category.hasMany(Business , { foreignKey: { allowNull: false }} );
Business.belongsTo(Category);

Gallery.hasOne(Business, { foreignKey: { allowNull: false }});
Business.belongsTo(Gallery);

Membership.hasMany(Business);
Business.belongsTo(Membership);

User.hasMany(Business, { foreignKey: { allowNull: false }});
Business.belongsTo(User);

User.hasMany(Review, { foreignKey: { allowNull: false }});
Review.belongsTo(User);

Business.hasMany(Review , { foreignKey: { allowNull: false }} );
Review.belongsTo(Business);

Review.hasOne(Earning , { foreignKey: { allowNull: false }} );
Earning.belongsTo(Review);



