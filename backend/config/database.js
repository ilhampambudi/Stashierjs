import { Sequelize } from "sequelize";

const db = new Sequelize('stashier', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db