const Accounts = require('./accounts.model');

class AccountsService {

  getOne(id) {
    return Accounts.findOne({
      _id: id,
      deletedAt: null
    }).exec();
  }

  getList(skip, limit) {
    return Accounts.find({
      deletedAt: null
    })
    .skip(+skip || 0)
    .limit(+limit || 10)
    .exec();
  }

  create(accountInfo) {
    return Accounts.create(accountInfo);
  }

  update(id, newAccount) {
    return Accounts.updateOne({ _id: id }, newAccount).exec();
  }

  delete(id) {
    return Accounts.updateOne({ _id: id }, {
      deletedAt: new Date()
    }).exec();
  }
}

module.exports = AccountsService;