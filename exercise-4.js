var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.query('SELECT Account.id, AddressBook.name, Account.email FROM Account LEFT JOIN AddressBook ON Account.id=AddressBook.accountId ORDER BY Account.id', function (err, rows, fields){
    if (err) {
        throw err;
    }
    else {
        var info = {};
        rows.forEach(function(row) {
            if (info[row.email]){
                console.log(row.name)
            }
            else {
                console.log('#' + row.id + ': ' + row.email);
                if (row.name) {
                    console.log(row.name)
                }
                else {
                    console.log("--No address book--")
                }
                info[row.email] += row.name;
            } 
        });
    }
    connection.end();
})

