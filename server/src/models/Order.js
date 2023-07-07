var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  id : {
    type: String,
    required : true,
  },
    name: {
    type: String,
    required: true
  },
  categorie: {
    type: String,
    required: true
    
  },
  
  prix: {
    type: String,
    required: true
  },
  image: {
    type: String,  // Vous pouvez utiliser le type String pour stocker le chemin de l'image
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  total : {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('oder', orderSchema);
