const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { urlencoded } = require('express');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global variables
app.use((req,res,next)=>{
    next();
});

//Routes

app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

//Public
app.use(express.static(path.join(__dirname,'public')));
// Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});