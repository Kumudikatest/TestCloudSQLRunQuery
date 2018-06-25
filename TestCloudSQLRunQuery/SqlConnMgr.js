module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["test-instance-1"] = {
        host: "104.196.65.143",
        port: "3306",
        user: "user1",
        password: process.env.Password_sqltestInstance1,
        database: "mysql"
    };
};