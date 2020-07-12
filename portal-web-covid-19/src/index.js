const express = require('express');
const morgan = require('morgan');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));

// Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});