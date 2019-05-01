const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  api_id: process.env.APP_ID,
  api_key: process.env.APP_KEY,
  port: process.env.PORT
};
