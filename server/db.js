var config      = require('../knexfile.js');  
var  env = process.env.NODE_ENV || 'development'
console.log(config[env], '}}}}}}}}}}}}}}}}}}}')
var knex        = require('knex')(config[env]);
module.exports = knex;

// knex.migrate.latest([config]); 