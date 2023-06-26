const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(firstname, lastname, email, hpassword) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hpassword) VALUES
  (?,?,?,?)`,
      [firstname, lastname, email, hpassword]
    )
  }

  findOne(email) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
  }


}

module.exports = UserManager;