const Users = require('./users.model');

class UsersService {
  
  getOne(id) {
    return Users.findOne({
      _id: id,
      deletedAt: null
    }).exec();
  };

  getList(skip, limit) {
    return Users.find({
      deletedAt: null
    })
    .skip(+skip || 0)
    .limit(+limit||10)
    .exec();
  }

  create(userInfo) {
    return Users.create(userInfo);
  }

  update(id, userInfo) {
    return Users.updateOne({
      _id: id
    }, userInfo).exec();
  }

  delete(id) {
    return Users.updateOne({ _id: id }, {
      deletedAt: new Date()
    }).exec();
  }
}

module.exports = UsersService;