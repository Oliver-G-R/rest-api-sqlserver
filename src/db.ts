import sql from  'mssql'
import config from  './config'

(async () => {
    const { MSSQL: {
        USER,
        PASSWORD,
        SERVER,
        DATABASE
    } } = config

    try {
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
        
        const pool = await sql.connect(configDB)
    
        return pool
    } catch (error) {
        console.log(error)
    }

})()