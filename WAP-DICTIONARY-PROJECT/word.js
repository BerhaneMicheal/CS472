var mysql = require("mysql");

// configration file
var connection = mysql.createConnection({
  host: "localhost",
  user: "Dainom",
  password: "Kidanemhret21",
  database: "entries",
  socketPath: "/tmp/mysql.sock"
});

connection.connect(err => {
  if (err) throw err;
  console.log("Database Connected!");
});

exports.wordMeaning = function (res, searchterm) {
  connection.query(
    'select * from entries where word = "' + searchterm + '"',
    function (err, rows) {
      if (err) throw err;
      //   res.send(rows);
      res.status(200).json(rows);
    }
  );
};
