import { Sequelize } from "sequelize";

const db = new Sequelize('stashier', 'pmbd', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

export default db