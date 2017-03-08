module.exports = {
    port: process.env.PORT || 3000,
    sessionSecret: "====SECRET====",
    mysql: {
        debug: false,
        connectionLimit: 10,
        host: 'hostname',
        user: 'username',
        password: 'password',
        database: 'db-name'
    },
    jwt: {
        secret: "====SECRET====",
        expiresInMinutes: 1440    // expires in 24 hours
    }
};
