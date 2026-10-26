const express = require("express");

const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);


// Home
app.get("/", (req, res) => {
  res.send(`
    <h1>Authentication System</h1>

    <a href="/register">Register</a>
    <br><br>

    <a href="/login">Login</a>
  `);
});


// Register Page
app.get("/register", (req, res) => {
  res.send(`
    <h1>Register</h1>

    <form action="/api/auth/register" method="POST">

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
      >

      <br><br>

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
      >

      <br><br>

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
      >

      <br><br>

      <button type="submit">Register</button>

    </form>

    <br>

    <a href="/login">Already have an account? Login</a>
  `);
});


// Login Page
app.get("/login", (req, res) => {
  res.send(`
    <h1>Login</h1>

    <form action="/api/auth/login" method="POST">

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
      >

      <br><br>

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
      >

      <br><br>

      <button type="submit">Login</button>

    </form>

    <br>

    <a href="/register">Don't have an account? Register</a>
  `);
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});