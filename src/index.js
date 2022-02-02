const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express()
const port = 3000
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' })
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

    // TEMPLATE ENGINE
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources\\views')); // cách mình tìm đến file, hệ điều hành window

// router
route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})