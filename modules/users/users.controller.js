const UsersService = require('./users.service');

class UsersController {
  constructor(){
    this.service = new UsersService();
    this.list = this.list.bind(this);
    this.get = this.get.bind(this);
    this.load = this.load.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.create = this.create.bind(this);
  }

  async load(req, res, next) {
    const { params } = req;
    const { id: userId } = params;
    const user = await this.service.getOne(userId);

    req.user = user;
    return next();
  }

  async list(req, res) {
    const { skip, limit } = req.query;
    const userList = await this.service.getList(skip, limit);

    return res.json(userList);
  }

  get(req, res) {
    const { user } = req;
    return res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;

    const newUser = req.body;
    await this.service.update(id, newUser);
    return res.json({ msg: 'success' })
  }

  async delete(req, res) {
    const { id } = req.params;

    await this.service.delete(id);
    return res.json({ msg: 'success' })
  }

  async create(req, res) {
    const userInfo = req.body;
    const newUser = await this.service.create(userInfo);
    return res.json(newUser);
  }
}

module.exports = UsersController;