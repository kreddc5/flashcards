const express = require ('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');

app.use((req, res, next) => {
    console.log('Hello');
    const err = new Error('This is an test error');
    err.status = 500;
    next(err);
});

app.use((req, res, next) => {
    console.log('World');
    next();
});

//will display this list of arrays on the card route
// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'purple'
//   ];

app.get('/', (req, res) => { 
    const name = req.cookies.username; 
    if (name) {
        res.render('index', {name})
    } else {
        res.redirect('/hello');
    }

}); 

app.get('/cards', (req, res) => { 
    res.render('card', {prompt: 'Who is buried in grants tomb', colors});
});

app.get('/hello', (req, res) => { 
    const name = req.cookies.username; 
    if (name) {
        res.redirect('/')
    } else {
        res.render('hello');
    }
    //when users get to the hello route hello will be rendered 
}); 

app.post('/hello', (req, res) => { 
    res.cookie('username', req.body.username)
    //when users get to the hello route hello will be rendered 
    res.redirect('/');
}); 

app.post('/goodbye', (req, res) => { 
    res.clearCookie('username');
    res.redirect('/hello');
}); 

app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next ) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err); 
});

app.listen(3000, () => {
    console.log('app is live at localhost:3000');

});  
