import { config } from "dotenv"
config()

export default {
    PORT: process.env.PORT || 3000,
    MSSQL:{
        USER: process.env.MSSQL_USER,
        PASSWORD: process.env.MSSQL_PASSWORD,
        SERVER: process.env.MSSQL_SERVER || 'localhost',
        DATABASE: process.env.MSSQL_DATABASE || 'test'
    }
}