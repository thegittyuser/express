import { capitalCase } from "change-case";

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

export const login = (req, res) => {
  res.render("login");
};

export const dologin = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    res.send("Email does not exist");
  }

  if (user.password !== password) {
    res.send("Password is incorrect.");
  }


  user.username = capitalCase(user.username);

  res.render("welcome", { user, title: "Welcome" });
};
