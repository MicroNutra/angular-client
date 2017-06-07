'use strict';

const express = require('express')
const port = process.env.PORT || 3001
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/./', 'node_modules')))

app.get('/*', function(req, res) {
  res.sendFile('public/index.html', {root: __dirname})
})

app.listen(port, function(){
  console.log('Express server listening on port ' + port + '.');
});
