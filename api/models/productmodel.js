import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize

const Product = db.define('product',{
    nama:{
        type: DataTypes.STRING
    },
    harga:{
        type: DataTypes.DOUBLE
    }
})

export default Product