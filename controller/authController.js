const users = [];

export const register = (req, res) => {
  res.render("register");
};
export const doregister = (req, res) => {
  const { username, email, password } = req.body;

  const user = users.find((e) => e.email === email);
  if (user) {
    res.send(
      "Email is already registered. <a href='/register'>Register Again</a>",
    );
  }

  users.push({ username, email, password });
  console.log(users);
  res.redirect("login");
};
