var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  categorie: {
    type: String,
    required: true
    
  },
  description: {
    type: String,
    required: true
  },
  prix: {
    type: String,
    required: true
  },
  in_stock: {
    type: String,
    required: true
  },
  image: {
    type: String,  // Vous pouvez utiliser le type String pour stocker le chemin de l'image
    required: true
  }
});

module.exports = mongoose.model('produit', userSchema);
