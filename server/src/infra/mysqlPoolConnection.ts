import  mysql2 from 'mysql2/promise'

export const pool = mysql2.createPool({
  host: process.env.HOST_KEY,
  user: process.env.USER_KEY,
  database: "projeto",
  password: '',
  port: 3306,
  
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}
)
       