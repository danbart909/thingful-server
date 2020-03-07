module.exports = {
  PORT: process.env.PORT || 9090,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://postgres:401923@localhost/thingful',
  TEST_DATABASE_URL: process.env.TEST_DB_URL || 'postgresql://postgres:401923@localhost/thingful-test',
  JWT_SECRET: process.env.JWT_SECRET || 'test-jwt-secret'
}