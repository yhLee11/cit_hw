var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');
var fs = require('fs');

client.on('connect', function(){
	client.subscribe('topic2',()=>{console.log('Subscribe topic2');});
});
client.on('message', function(topic, message){
	var data = JSON.parse(message);
	fs.writeFileSync('topic2_data.txt', data);
	console.log('===topic2_data===\n', fs.readFileSync('topic2_data.txt','utf8'))
	client.end();
});
