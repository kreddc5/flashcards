const express = require ('express');

const app = express();

app.set('view engine', 'pug')

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.get('/', (req, res) => { 
    res.render('index');
}); 

app.get('/cards', (req, res) => { 
    
    res.render('card', {prompt: 'Who is buried in grants tomb', colors});
}); 

app.listen(3000, () => {
    console.log('app is live at localhost:3000');

});  