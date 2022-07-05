const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.post('/post', (req, res, next) => {
    var sql = `INSERT INTO clients (name,email, birth_date, gender, city, state, profission, schooling, q1,q2,q3,q4,q5,q6) VALUES ("${req.body.nome}","${req.body.birth_date}","${req.body.gender}","${req.body.city}","${req.body.state}","${req.body.profession}","${req.body.schooling}",${req.body.q1},${req.body.q2},${req.body.q3},${req.body.q4},${req.body.q5},${req.body.q6})`; 
    var id;
    console.log(id)
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("1 record inserted");
        id = result.insertId;
        postContinue(req,id);
    })

  });

  function postContinue(req, id){
    if (req.body.ITUB4 != ''){
        var sqla = `INSERT INTO interests (client_id, stock) VALUES (?, "${req.body.ITUB4}")`;
        db.query(sqla,[id], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("1 record inserted");
        });
    }
    if (req.body.PETR4 != ''){
        var sqlb = `INSERT INTO interests (client_id, stock) VALUES (?, "${req.body.PETR4}")`;
        db.query(sqlb,[id], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("1 record inserted");
        });
    }
    if (req.body.VALE3 != ''){
        var sqlc = `INSERT INTO interests (client_id, stock) VALUES (?, "${req.body.VALE3}")`;
        db.query(sqlc,[id], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("1 record inserted");
        });
    }
    if (req.body.NEWS != ''){
        var sqlc = `INSERT INTO interests (client_id, stock) VALUES (?, "NEWS.*")`;
        db.query(sqlc,[id], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("1 record inserted");
        });
    }
    if (req.body.IPCA){
        var sqlc = `INSERT INTO interests (client_id, stock) VALUES (?, "TES.IPCA")`;
        db.query(sqlc,[id], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("1 record inserted");
        });
    }
    if (req.body.SELIC){
        var sqlc = `INSERT INTO interests (client_id, stock) VALUES (?, "TES.SELIC")`;
        db.query(sqlc,[id], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("1 record inserted");
        });
    }
    if (req.body.PREFIXADO){
        var sqlc = `INSERT INTO interests (client_id, stock) VALUES (?, "TES.PREFIXADO")`;
        db.query(sqlc,[id], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("1 record inserted");
        });
    }
    return;
  }
  router.get('/get', function (req, res, next) {
    db.query('SELECT name FROM clients limit 1', function(err, rows, fields) {   
        if (err) throw err;  
        console.log(res);
        console.log(fields);
        console.log(rows);
     });
  });
  

  return router;
}

module.exports = createRouter;