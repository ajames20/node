const mongoose = require('mongoose');

const { Schema } = mongoose;

const GenreSchema = Schema({
  name: { type: String, required: true, min: 3, max: 100 },
});

// Virtual for book's URL
GenreSchema.virtual('url').get(function() {
  return `/catalog/genres/${this._id}`;
});

// Export model
module.exports = mongoose.model('Genre', GenreSchema);
