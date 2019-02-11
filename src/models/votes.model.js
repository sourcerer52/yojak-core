// votes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const votes = new Schema(
    {
      pollId: { type: String, required: true },
      optionId: { type: Number, required: true },
      votedBy: { type: String, required: true }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('votes', votes);
};
