const env = process.env;

const config = {
  db: { /* don’t expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || '10.254.0.2',
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || 'root',
    database: env.DB_NAME || 'data',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;
