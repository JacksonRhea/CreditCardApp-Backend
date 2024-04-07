import * as express from "express";

const TestController = require('./controllers/testController');
const UserController = require('./controllers/userController');

const router = express.Router();

//Test functions
router.get('/test', TestController.test);
router.get('/testTwo', TestController.testTwo);
router.post('/ping', (req, res) => {
  console.log('Ping POST called');
  res.send('pong');
});

//User functions
router.post('/addUser', UserController.addUser);

export default router;