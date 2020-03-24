const dotenv = require('dotenv');
const convict = require('convict');

const config = convict({
   env: {
    doc: 'The application environment',
    format: ['production', 'test', 'development'],
    default: 'production',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address to bind',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'URL'
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 3000,
    env: 'PORT'
  },
});

config.validate({ allowed: 'strict' }); // виконувати перевірку параметрів

module.exports = config;
