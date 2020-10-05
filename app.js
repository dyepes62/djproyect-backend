const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api", require("./routes/cars.js"));  
app.use("/api", require("./routes/drivers.js"));  
app.use("/api", require("./routes/users.js")); 

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('App listening on port '+ app.get('puerto'));
});