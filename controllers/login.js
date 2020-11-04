function index(req, res) {
    res.render('login/index');

}
function login(req, res) {
    const { username, password } = req.body;
    if (username === 'yon' && password === 'yon512') {
        const ssid = req.app.get('sessions').length + 1;
        req.app.set('sessions', [...req.app.get('sessions'), ssid]);
        res.cookie('ssid', ssid);
        res.redirect('/');

    }
    else res.redirect('/login');
}
module.exports = { index, login };