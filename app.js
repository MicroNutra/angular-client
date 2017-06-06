'use strict';

var express = require('express'),
    port = process.env.PORT || 3001,
    app = express();

app.use(express.static(__dirname + '/public'));

if(!module.parent) {
  app.listen(port, function(){
    console.log('Express server listening on port ' + port + '.');
  });
}
