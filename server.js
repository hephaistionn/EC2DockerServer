var express = require('express');
var bodyParser = require('body-parser');
var server = express();
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

//docker kill $(docker ps -q)
//docker rm $(docker ps -a -q)

server.post('/dockertest', function(req, res){
    res.json({
        docker_status: 'ready'
    });
});

server.get('/dockertest', function(req, res){
    res.json({
        docker_status: 'ready'
    });
});

server.use(express.static('client'));

server.listen(process.env.NODE_PORT || 3000, function() {
    console.log('EC2 waiting for instruction on',process.env.NODE_PORT);
});