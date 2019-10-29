const AccountsService = require('./accounts.service');

class AccountsController{
  constructor(){
    this.service = new AccountsService();
    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
    this.load = this.load.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.create = this.create.bind(this);
  }

  async load(req, res, next) {
    const { params } = req;
    const { id } = params;

    const account = await this.service.getOne(id);
    req.account = account;
    return next();
  }

  get(req, res) {
    const { account } = req;
    return res.json(account);
  }

  async list(req, res) {
    const { skip, limit } = req.query;
    const accountList = await this.service.getList(skip, limit);
    return res.json(accountList);
  }

  async update(req, res) {
    const { id } = req.params;
    const newAccount = req.body;
    await this.service.update(id, newAccount);
    return res.json({ msg: 'success' })
  }

  async delete(req, res) {
    const { id } = req.params;

    await this.service.delete(id);
    return res.json({ msg: 'success' })
  }

  async create(req, res) {
    const accountInfo = req.body;
    const newAccount = await this.service.create(accountInfo);
    return res.json(newAccount);
  }
}

module.exports = AccountsController;