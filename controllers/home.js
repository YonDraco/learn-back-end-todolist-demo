const Todo = require("../models/Todos");
// const queryString = require("querystring");

async function index(req, res) {
  let auth = false;
  if (Object.keys(req.cookies).length && req.cookies.ssid) {
    const a = req.app.get('sessions').filter(ssid => ssid == req.cookies.ssid);

    if (a.length) auth = true;
  }
  console.log(auth)
  // if(Object.keys(req.cookies).length) console.log(req.cookies);
  // else {
  //   res.cookie('my-cookie', 'data: 123');
  // }
  let p = 1,
    n = 2;
  if (req.query) {
    if (req.query.p) p = Number(req.query.p);
    if (req.query.n) n = Number(req.query.n);
  }

  // const data = .getTodo(p, n);
  const data = await Todo.getAll(p, n);
  // console.log(data);
  res.render("home/index",
    {
      title: "Home Page",
      page: p, noPage: n,
      pr: p - 1, nxt: p + 1,
      todoList: data, auth
    });
}

// chuc nang xoa todos
async function deleteTodo(req, res) {
  let params = req.params || req.params._id || false;
  if (params) {
    await Todo.deleteTodo(params.id);
  }
  res.redirect("/"); // tra ve trang chu
}

module.exports = { index, deleteTodo };

// neu co nhieu ham thi sd
// module.exports = {}
