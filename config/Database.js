import { Sequelize } from "sequelize";

const db = new Sequelize("pengaduan_masyarakat_jihan", "root", "",{
    
    host:"localhost",
    dialect:"mysql",
})

export default db;