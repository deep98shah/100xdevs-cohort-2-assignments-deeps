const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose = require("mongoose");

mongoose.connect("").then('DB connected')

const User = mongoose.model('Users', {name: String, email: String, password: String})

const app = express();

app.use(express.json())

function userExists(email) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  return User.findOne({email: email})
}

app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
  
    const existingUser = await userExists(email)
    console.log('Existing user: ', existingUser)
  
    if (existingUser) {
      return res.status(400).send('User already exists')
    }

    const user = new User({name: name, email: email, password: password})
    user.save().then(() => {
        return res.status(200).send('User created')
    })
})

app.post("/signin", async function (req, res) {
    const email = req.body.email
    const password = req.body.password
    const existingUser = await userExists(email)
  
    if (!existingUser) {
      return res.status(400).send('User does not exist')
    }

    var token = jwt.sign({ email: email }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const email = decoded.email;
    // return a list of users other than this username
    return res.status(200).json(ALL_USERS.filter((user) => {
        return user.username != username
    }))
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)