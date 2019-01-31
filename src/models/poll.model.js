// poll-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const poll = new Schema(
    {
      title: { type: String, required: true },
      description: { type: String },
      options: [{ name: String, optionId: Number }],
      votes: [
        {
          userId: String,
          optionId: Number,
          createdAt: { type: Date, default: new Date() }
        }
      ],
      createdBy: { type: String, required: true }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('poll', poll);
};
