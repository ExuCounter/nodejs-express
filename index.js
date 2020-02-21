const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'views', 'index.hbs'));
// });
//
// app.get('/about', (req,res) => {
//     res.sendFile(path.join(__dirname, 'views', 'about.hbs'));
// });

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});