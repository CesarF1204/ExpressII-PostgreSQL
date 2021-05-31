const config = require("../config");
const pgp = require('pg-promise')();

class Model {
    constructor() {
        this.connection = pgp(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
    }
    async query(statement) {
        try {
            return await this.connection.query(statement);
        }catch(err) {
            console.log(err);
            return false;
        }
    }
}
module.exports = Model;