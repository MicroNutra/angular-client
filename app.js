'use strict';

var express = require('express'),
    port = process.env.PORT || 3001,
    app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/*', function(req, res) {
  res.sendFile('public/index.html', {root: __dirname})
})

app.listen(port, function(){
  console.log('Express server listening on port ' + port + '.');
});
