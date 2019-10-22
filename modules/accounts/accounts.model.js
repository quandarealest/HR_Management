const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountsSchema = new Schema(
  {
    userId: String,
    username: String,
    password: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    deactivatedAt: {
      type: Date,
      required: false,
    }
  },
  {
    versionKey: false,
    collection: 'accounts'
  }
);

module.exports = mongoose.model('Accounts', AccountsSchema);