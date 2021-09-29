const env = process.env;

const config = {
  postgresql: {
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'postgres',
    password: env.DB_PASSWORD || 'P@ssw0rd',
    database: env.DB_NAME || 'Users',
  }
}

module.exports = config;
