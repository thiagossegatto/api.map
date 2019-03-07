const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PropertiesSchema = new mongoose.Schema({
  title: String,
  latitude: String,
  longitude: String
})

//PropertiesSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Properties', PropertiesSchema);