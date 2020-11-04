const home = require("../controllers/home");

function setHomeRoutes(app) {
  app.get(/^\/(\?.*)?$/, home.index);
  app.get("delete/:id", home.deleteTodo); // duong dan de xoa todo
}

module.exports = setHomeRoutes;
