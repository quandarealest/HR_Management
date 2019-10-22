const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema(
  {
    fullName: String,
    address: [String],
    dob: Date,
    idLicense: String,
    phone: [String],
    email: [String],
    deletedAt: {
      type: Date,
      required: false,
    },
    createdAt: {
      type: String,
      default: new Date(),
    }
  },
  {
    versionKey: false,
    collection: 'users'
  }
);

module.exports = mongoose.model('Users', UsersSchema);