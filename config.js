class dbConfig {
    constructor() {
        this.host = 'localhost';
        this.user = 'postgres';
        this.password = 'root';
        this.database = 'express_login_and_registration';
        this.port = 5432;
    }
}
module.exports = new dbConfig;