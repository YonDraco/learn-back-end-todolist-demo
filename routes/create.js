const createCtrl = require('../controllers/create')
function setCreateRoutes(app) {
    app.get('/create', createCtrl.index);
    app.post('/create', createCtrl.create);
}

module.exports = setCreateRoutes;