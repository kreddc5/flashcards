const express = require ('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.set('view engine', 'pug')


//will display this list of arrays on the card route
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.get('/', (req, res) => { 
    const name = req.cookies.username; 
    res.render('index', {name});
}); 

app.get('/cards', (req, res) => { 
    res.render('card', {prompt: 'Who is buried in grants tomb', colors});
}); 

app.get('/hello', (req, res) => { 
    //when users get to the hello route hello will be rendered 
    res.render('hello');
}); 

app.post('/hello', (req, res) => { 
    res.cookie('username', req.body.username)
    //when users get to the hello route hello will be rendered 
    res.redirect('/');
}); 

app.listen(3000, () => {
    console.log('app is live at localhost:3000');

});  