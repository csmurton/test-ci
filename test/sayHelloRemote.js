'use strict';
const assert = require('chai').assert;
const request = require('request');

describe('Hello World function (Remote)', function() {
    it('Hello World function should say... hello', function(done) {
	var url = process.env.HELLO_API_ENDPOINT + "/hello";
	console.log(url);

	request.get({ 'url': url }, function (err, result, body) {
		if(err) {
			throw new Error("Unable to say hello remotely: " + err);
		}

		assert.equal(result.statusCode, 200);
		assert.equal(body, "Hello world 22");
		done();
	});
    });
});
