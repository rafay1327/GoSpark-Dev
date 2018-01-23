
 
    var Store = require('./Store')
    var Business = require('./Business')
    var Location = require('./Location');
    var Deal = require('./Deal');
    var Category = require('./Category');
    var Review = require('./Review');
    var Beacon = require('./Beacon');
    var Tag = require('./Tag')
    var User = require('./User')
    var Membership = require('./Membership')
    var Earning = require('./Earning')
    var Gallery = require('./Gallery')
   
    var Badge = require('./Badge');
    // let BusinessTag;
    //  BusinessTag = require('./BusinessTag');
    
    var UserDeal = require('./Wishlist');
    var BusinessBadge = require('./BusinessBadge');
    
    

    console.log(Business);
    console.log(Deal);
    console.log(Location);
    console.log(Membership);
    console.log(User);
    console.log(Tag);
    console.log(Badge);
    console.log(Gallery);
    console.log(Earning);
    console.log(Review);
    console.log(Category);
    console.log(Beacon);
    console.log(Store);
    console.log(BusinessBadge);
    console.log(UserDeal);

     Business.hasMany(Deal);
     Deal.belongsTo(Business);
     
     Location.hasMany(Store);
     Store.belongsTo(Location);
     
     // Store.hasMany(Beacon);
     // Beacon.belongsTo(Store);

     Category.hasMany(Business);
     Business.belongsTo(Category);

     Gallery.hasOne(Business);
     Business.belongsTo(Gallery);
    
     Membership.hasMany(Business);
     Business.belongsTo(Membership);

     User.hasMany(Business);
     Business.belongsTo(User);

     User.hasMany(Review);
     Review.belongsTo(User);

     Business.hasMany(Review);
     Review.belongsTo(Business);
    
     Review.hasOne(Earning);
     Earning.belongsTo(Review);

     


