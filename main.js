var express = require('express'),
	server;

app = express();

app.get('', function(){
	res.send('hello');
})

server = app.listen(80,function(){
  console.log('Listening on port 80');
});