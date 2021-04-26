var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');
var fs = require('fs');
var data;
client.on('connect', function(){
	client.subscribe('topic1', ()=>{console.log('Subscribe topic1');});
});
client.on('message', function(topic, message){
	data = JSON.parse(message);
	fs.writeFileSync('topic1_data.txt', data);
	console.log('===topic1_data.txt===\n'+fs.readFileSync('topic1_data.txt','utf8'));
	
	data+="im yeonhee";
	client.publish('topic2', JSON.stringify(data));
	client.end();
});
