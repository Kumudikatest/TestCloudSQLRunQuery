let AWS = require('aws-sdk');
let SL_GCP = require('slappforge-sdk-gcp');
let sqlConnMgr = require('./SqlConnMgr');
const sql = new SL_GCP.SQL(sqlConnMgr);

exports.handler = function (event, context, callback) {
    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param.
    // You must always end/destroy the DB connection after it's used.
    sql.query({
        instanceIdentifier: 'test-instance-1',
        query: 'INSERT INTO Customers (CustomerName, Address, Country)',
        inserts: ['TestName','TestAddress','US']
    }, function (error, results, connection) {
        if (error) {
            throw error;
        } else {
            // use `results` to do your magic
            console.log(results);
        }
        connection.end();
    });


    callback(null, 'Successfully executed');


}