const { Router } = require('express');
const UserRouter = require('./users/users.routes');
const AccoutRouter = require('./accounts/accounts.routes');

const rootRouter = new Router();
const userRouter = new UserRouter();
const accountRouter = new AccoutRouter();

rootRouter.use('/users', userRouter.router);
rootRouter.use('/accounts', accountRouter.router);

module.exports = rootRouter;