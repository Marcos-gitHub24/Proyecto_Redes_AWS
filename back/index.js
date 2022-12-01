const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://ec2-54-226-138-148.compute-1.amazonaws.com:27017/Proyecto";

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/Administradores", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Proyecto");
    dbo
      .collection("Admin")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.send({ans:result});
        db.close();
      });
  });
});

app.get("/Funcion", function (req, res) {
  console.log("entro al get data")
  var primero = null;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Proyecto");
    dbo
      .collection("Funcion")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;

        //res.send({ans:result});
        primero = result;
        db.close();
      });
      dbo
      .collection("noticia")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.send({funciones:primero, noticias:result});
        db.close();
      });
  });
  /*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Proyecto");
    dbo
      .collection("noticia")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.send({funciones:primero, noticias:result});
        db.close();
      });
  });*/
});

app.get("/Desarrolladores", function (req, res) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Proyecto");
      dbo
        .collection("Desarrolladores")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          console.log({respuesta:{ans:result,ansi:result}});
          res.send({ans:result,ansi:result});
          //res.send({ans:result});
          db.close();
        });
    });
  });

  app.get("/Desarrollo", function (req, res) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Proyecto");
      dbo
        .collection("Desarrollo")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send({ans:result});
          db.close();
        });
    });
  });

app.listen(5000, () => console.log("Server on port 5000"));
