let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();


exports.handler = function (event, context, callback) {



	callback(null, 'Successfully executed');



	kinesis.putRecord({
		Data: 'data',
		PartitionKey: '0001',
		StreamName: 'Hiru_Test'
	}).promise()
		.then(putRecordData => {
			// your logic goes here
		})
		.catch(err => {
			// error handling goes here
		});


}