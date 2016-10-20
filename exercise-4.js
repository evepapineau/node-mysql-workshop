var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.query('SELECT AddressBook.id, AddressBook.name, Account.email FROM Account LEFT JOIN AddressBook ON Account.id=AddressBook.accountId GROUP BY Account.id limit 5', function (err, rows, fields){
    if (err) {
        throw err;
    }
    else {
        rows.forEach(function(row) {
            console.log('#' + row.id + ': ' + row.email + '\n' + row.name)
        });
    }
    connection.end();
})