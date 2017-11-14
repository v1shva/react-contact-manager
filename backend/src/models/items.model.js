// items-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const items = new Schema({
    name : {
      type: String,
      required: [true, 'Name is required']
    },
    price : {
      type: Number,
      required: [true, 'Price is required']
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('items', items);
};
