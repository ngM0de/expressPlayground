import postgres from "postgres";


export const getDb = () => {
    return postgres({
        database: process.env.DATABASE_NAME,
        user: process.env.USER_NAME,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        ssl: 'allow'
    })
}


export const findUserByIp = async (db, ip) => await db`select name,ip,id from users where ip=${ip}`
export const registerUser = async (db, config) => await db`insert into users(name,ip) values(${config.name},${config.ip}) returning *`

