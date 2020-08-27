const {format} = require('timeago.js'); // verificar uso


const helpers = {};


helpers.timeago = (timestamp) => {
    return format(timestamp, 'es');
    
}

module.exports = helpers;