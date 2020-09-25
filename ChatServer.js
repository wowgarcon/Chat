const app = require('express')();
const http = require('http').createServer(app);;
const fs = require('fs');
const bodyParser = require('body-parser');
const routes = require('./router/routes');
const port = 1024;

app.use(express.static('public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get ( '/' , (req, res) => { 
    res.sendFile (__dirname + '/index.html' ); 
  });
routes(app);

app.listen(port, () => {
    console.log(`Server is listening at localhost '${port}'`);
});