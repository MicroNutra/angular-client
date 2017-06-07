'use strict';

const express = require('express')
const port = process.env.PORT || 5000
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.listen(port, function(){
  console.log('Express server listening on port ' + port + '.');
});
