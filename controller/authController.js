import { capitalCase } from "change-case";

const users = [];

export const register = (req, res) => {
  res.render("register");
};

export const doregister = (req, res) => {
  const { username, email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (user) {
    return res.send(
      "Email is already registered. <a href='/register'>Register Again</a>",
    );
  }

  users.push({ username, email, password });

  console.log(users);

  res.redirect("/login");
};

export const login = (req, res) => {
  res.render("login");
};

export const dologin = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.send("Email does not exist. <a href='/login'>Login</a>");
  }

  if (user.password !== password) {
    return res.send("Password is incorrect. <a href='/login'>Try Again</a>");
  }

  // Format username for display
  user.username = capitalCase(user.username);

  // Store logged-in user in session
  req.session.user = user;

  res.redirect("/welcome");
};

export const welcome = (req, res) => {
  if (!req.session.user) {
    return res.send("Please log in first. <a href='/login'>Login</a>");
  }

  res.render("welcome", {
    user: req.session.user,
  });
};
