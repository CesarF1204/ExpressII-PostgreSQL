const Model = require('./Model');
const mysql = require('mysql');

class User extends Model {
    constructor() {
        super();
    }
    registered(students) {
        try{
            let values = [students['first_name'], students['last_name'], students['email'], students['password']];
            let sql_query = mysql.format(`INSERT INTO login_and_registration.students (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`, values);
            return this.query(sql_query);
        } catch(err) {
            console.log("Error: ", err);
        }
    }
    async loginProcess(students) {
        try {
            let email = students['email'];
            let password = students['password'];
            let sql_query = mysql.format(`SELECT * FROM login_and_registration.students WHERE email = ? AND password = ?`, [email, password]);
            return await this.query(sql_query);
        } catch(err) {
            console.log("Error: ", err);
        }
    }
    async get_all_users(email) {
        try {
            let sql_query = mysql.format(`SELECT count(*) as email_count FROM login_and_registration.students WHERE email = ?`, email);
            return await this.query(sql_query);
        } catch(err) {
            console.log("Error: ", err);
        }
    }
}
module.exports = new User;