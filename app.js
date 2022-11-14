const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });
require("./db/dbConnection");
const UserModel = require("./db/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./auth");
var cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new UserModel({
        email: req.body.email,
        password: hashedPassword,
      });
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        err,
      });
    });
});
app.post("/login", (req, res) => {
  UserModel.findOne({ email: req.body.email })
    //si le mail existe
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            return res.status(400).send({
              message: "passwords does not match",
              err,
            });
          }
          // si le mot de passe correspont
          // creer le token jwt
          const token = jwt.sign(
            {
              userId: user._id,
              userMail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          // ----
          // renvoyer un message de reussite avec le token créé
          res.status(200).send({
            message: "Login Succesfuly",
            email: user.email,
            token,
          });
          // ---
        })
        .catch((err) => {
          res.status(400).send({ message: "passwords does not match", err });
        });
    })
    .catch((err) => {
      res.status(404).send({
        message: "Email not found",
        err,
      });
    });
});

// free endpoint
app.get("/free-endpoint", (req, res) => {
  res.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (req, res) => {
  res.json({ message: "You are authorized to access me" });
});

app.listen(process.env.PORT || 5001, () => {
  console.log(`listening on port :  ${process.env.PORT}`);
});
