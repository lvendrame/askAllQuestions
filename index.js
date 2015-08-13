var readline = require('readline'),
	rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});

function askQuestion(prompt, next) {
	rl.question(prompt.question, function(answer) {
		prompt.answer = answer;
		next();
	});
}

function askAllQuestions(prompts, callback) {
    var i = prompts.length - 1,
		fn = askQuestion.bind(null, prompts[i], function () {
		    callback(prompts.reduce(function (obj, prompt) {
		        obj[prompt.name] = prompt.answer;
		        return obj;
		    }, []));
		    rl.close();
		});

	for(i--;i >= 0; i--){
	    fn = askQuestion.bind(null, prompts[i], fn);
	}

	setTimeout(fn, 0);
}

module.exports = askAllQuestions;