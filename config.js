const env = process.env;

const config = {
  db: { /* don’t expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || '10.3.0.2',
    user: env.DB_USER || 'user1',
    password: env.DB_PASSWORD || 'user1',
    database: env.DB_NAME || 'data',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;
