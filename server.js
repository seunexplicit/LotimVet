var express = require('express'),
	mongoose = require('mongoose'),
	bodyparser = require('body-parser'),
	cons = require('consolidate');

var app = express();
var db = mongoose.connect('mongodb://127.0.0.1:27017/lotimVet');
app.use(bodyparser.json(), bodyparser.urlencoded());
app.use(bodyparser.text());

require('./model/lotim_model.js');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views',__dirname+'/views');
app.set('view option', {layout:false});

require('./router')(app);

app.listen(process.env.PORT || 3000, function(){console.log("listening at port 3000")});
