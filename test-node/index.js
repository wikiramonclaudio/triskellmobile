var express = require('express');
var app = express();

const comments_routes = require('./routes/comments')


// routes
// app.use('/', (req, res)=>{
//   return res.status(200).send({message: 'HOLA DESDE EL SERVIROLO'})
// });

// Cabeceras
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/comments', comments_routes);

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "triskell"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected to TRISKELL DB!");
// });

const http = require('http').createServer(app);

http.listen(3000, () => {
  console.log('Servidor Node/Express corriendo en puerto 3000: \x1b[36m%s\x1b[0m', 'online');
});

// module.exports = con;