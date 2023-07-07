var userModel = require('../models/Produit');
var orderModel = require('../models/Order')
module.exports.getDataFromDBService = () => {
  return userModel.find({}).exec();
}

module.exports.getOneFromDBService = (id) => {
  return userModel.findById(id).exec();
}

module.exports.createUserDBService = (userDetails) => {
  var userModelData = new userModel();
  userModelData.name = userDetails.name;
  userModelData.categorie = userDetails.categorie;
  userModelData.description = userDetails.description;
  userModelData.prix = userDetails.prix;
  userModelData.in_stock = userDetails.in_stock;

  userModelData.image = userDetails.image; // Ajoutez le champ de l'image

  return userModelData.save();
}

module.exports.updateUserDBService = (id, userDetails) => {
  return userModel.findByIdAndUpdate(id, userDetails, { new: true }).exec();
}

module.exports.removeUserDBService = (id) => {
  return userModel.findByIdAndDelete(id).exec();
}

module.exports.createOrder = (orderDetails) =>{
  var orderModelData = new orderModel();
  orderModelData.id = orderDetails.id;
  orderModelData.name = orderDetails.name;
  orderModelData.categorie = orderDetails.categorie;
  orderModelData.prix = orderDetails.prix;
  orderModelData.quantity = orderDetails.quantity;
  orderModelData.total = orderDetails.total;
  orderModelData.image = orderDetails.image; // Ajoutez le champ de l'image

  return orderModelData.save();
}