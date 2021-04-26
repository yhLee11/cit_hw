var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');
var fs = require('fs');

client.on('connect', function(){
	client.subscribe('topic1',()=>{console.log('Subscribe topic1');});
});
client.on('message', function(topic, message){
	var data = JSON.parse(message);
	fs.writeFileSync('received.txt', data);
	console.log('==received.txt==\n'+fs.readFileSync('received.txt','utf8'));
	client.end();
});

