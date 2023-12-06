const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//panggil routes
var routes = require('./routes');
routes(app);

//daftarkan menu routes dari index
app.use('/auth', require('./middleware/index.js'));

app.listen(3300, () => {
    console.log('Server started on port 3300');
});