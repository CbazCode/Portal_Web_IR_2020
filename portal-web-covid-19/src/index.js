const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const session = require('express-session');

const path = require('path');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const { urlencoded } = require('express');
const passport = require('passport');








const { database } = require('./keys');

// Intializations
const app = express();
require('./lib/passport');

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
app.use(session({
    secret: 'kioshibbcito',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
  }));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


//Global variables
app.use((req,res,next)=>{
    app.locals.success=req.flash('success');
    app.locals.message=req.flash('message');
    app.locals.user = req.user;

    app.locals.objeto = req.app.locals.objeto;
    
    next();
});




//Routes

app.use(require('./routes/index1'));
app.use(require('./routes/authentication'));
app.use('/COVID', require('./routes/links'));
app.use(require('./routes/form'));

//Public
app.use(express.static(path.join(__dirname,'public')));


// Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});

