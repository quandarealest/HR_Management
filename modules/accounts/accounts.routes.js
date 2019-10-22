const { Router } = require('express');
const AccountsController = require('./accounts.controller');

class AccountsRouter {
  constructor(){
    const controller = new AccountsController();
    const router = new Router();

    router.get('/', controller.list);
    router.get('/:id', controller.get);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);
    router.param('id', controller.load);

    this.router = router;
  }
}

module.exports = AccountsRouter;