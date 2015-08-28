"use strict";
var rl = require('readline').createInterface({
	  input: process.stdin,
	  output: process.stdout
	});

var q = require('q');

function askQuestion(prompt, next) {
	rl.question(prompt.question, function(answer) {
		prompt.answer = answer;
		next();
	});
}

function askAllQuestions(prompts, callback) {
    var i = prompts.length - 1, result, deferred,
		fn = askQuestion.bind(null, prompts[i], function () {
				result = prompts.reduce(function (obj, prompt) {
		        obj[prompt.name] = prompt.answer;
		        return obj;
		    }, {});
		    if(callback){
						callback(result);
				}else {
						deferred.resolve(result);
				}
		    rl.close();
		});

	for(i--;i >= 0; i--){
	    fn = askQuestion.bind(null, prompts[i], fn);
	}

	setTimeout(fn, 0);

	if(!callback){
			deferred = q.defer();
			return deferred.promise;
	}
}

module.exports = askAllQuestions;
