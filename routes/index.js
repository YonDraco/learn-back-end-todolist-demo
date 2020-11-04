const setHomeRoutes = require("./home");
const setCreateRoutes = require("./create")
const loginCtrl = require("../controllers/login")
function setRoutes(app) {
  setHomeRoutes(app);
  setCreateRoutes(app);
  app.get('/login', loginCtrl.index);
  app.post('/login', loginCtrl.login)
}

module.exports = setRoutes;
