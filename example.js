var askAllQuestions = require('./');

askAllQuestions([
		{ name: 'user', question: 'user: ' },
		{ name: 'password', question: 'password: ' },
		{ name: 'applicationName', question: 'application name: ' },
		{ name: 'applicationPath', question: 'application path: ' }
	], function (prompts) {
	console.dir(prompts);
});