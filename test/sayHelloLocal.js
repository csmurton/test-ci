'use strict';
const assert = require('chai').assert;
const sayHello = require('../sayHello/index');

describe('Hello World function', function() {
    it('Hello World function should say... hello', function() {
        sayHello.handler({}, {}, (err, result) => {
		assert.typeOf(err, 'null');
		assert.typeOf(result, 'object');

		assert.equal(result.statusCode, 200);
		assert.equal(result.body, "Hello world 22");
	});
    });
});
