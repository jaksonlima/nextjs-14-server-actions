const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "yourSecret";

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == "admin" && password === "admin") {
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });

    res.json({ token });
  } else {
    res.status(401).json({ error: "Authentication failed" });
  }
});

app.get("/protected", verifyToken, (req, res) => {
  res.json({ messsage: "Protected route accessed successfully" });
});

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ error: "Token not provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Failed to authenticate token" });
    }

    req.user = decoded;
    next();
  });
}

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
