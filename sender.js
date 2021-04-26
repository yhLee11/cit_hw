var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');

var fs = require('fs');
var file = 'testfile.txt';
var data = fs.readFileSync(file,'utf8');

client.on('connect', function(){
	client.subscribe('topic1');
	client.publish('topic1', JSON.stringify(data));
});

client.on('message', function(topic, message){
	console.log("Send "+ message +" to " + topic);
	client.end();
});

