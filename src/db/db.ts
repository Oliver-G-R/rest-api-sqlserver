import sql from  'mssql'
import config from  '../config'
const { MSSQL: {
    USER,
    PASSWORD,
    SERVER,
    DATABASE
} } = config

const configDB = {
    user: USER,
    password: PASSWORD,
    server: SERVER,
    database: DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

const db = async () => {
    try {
        const pool = await sql.connect(configDB)
        return pool
    } catch (error) {
        console.log(error)
    }
}

export {
    sql,
    db
}