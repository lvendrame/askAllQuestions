"use strict";
var readline = require('readline');
var q = require('q');
var FnQueue = require('./fnQueue');

function askAllQuestions(prompts, callback){
    var i = 0, len = prompts.length;
	var fnQueue = new FnQueue();
    var response = {};
	var rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout
	  });

    while (i< len) {
        fnQueue.add(
            askQuestion.bind(null, prompts[i++])
        );
    }

	fnQueue.delayStart(1);

    if(callback){
        fnQueue.add(function(){
			rl.close();
			callback(response);
		});
    }else{
        return callPromise();
    }

	function askQuestion(prompt) {
		rl.question(prompt.question, function(answer) {
			response[prompt.name] = answer;
			fnQueue.next();
		});
	}

	function callPromise(){
	    var deferred = q.defer();
		fnQueue.add(function(){
			rl.close();
	        deferred.resolve(response);
	    });
	    return deferred.promise;
	}
}

module.exports = askAllQuestions;
