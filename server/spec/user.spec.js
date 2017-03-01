var expect = require("chai").expect;
var request = require('request');



var apiurl = "http://localhost:3000/user/";

describe('koa-example', function() {
	it("user/edit", function(done) {
		var url = apiurl + "58ac2618e81a973067144dab";
		request({
			method: "post",
			url: url,
			json: true,
			body: {
				"password": "it is secret"
			}
		}, function(error, res, body) {
			console.info(body);

			done();
		});
	});

});