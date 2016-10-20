var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.query("SELECT AddressBook.id, AddressBook.accountId, AddressBook.name, Email.address FROM AddressBook JOIN Email ON AddressBook.id=Email.id limit 5", function(err, rows, fields) {
    if (err) {
        throw err;
    }
    else {
        rows.forEach(function(row) {
            console.log('#' + row.id + ': ' + row.accountId + " " + row.name + " " + row.address);
        });
    }
    connection.end();
})
