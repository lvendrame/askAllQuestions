var askAllQuestions = require('./');


askAllQuestions([
		{ name: 'firstName', question: 'First Name: ' },
		{ name: 'lastName', question: 'Last Name: ' },
		{ name: 'age', question: 'Age: ' }
	]).then(function (prompts) {
	console.dir(prompts);
});

// askAllQuestions([
// 		{ name: 'user', question: 'user: ' },
// 		{ name: 'password', question: 'password: ' },
// 		{ name: 'applicationName', question: 'application name: ' },
// 		{ name: 'applicationPath', question: 'application path: ' }
// 	], function (prompts) {
// 	console.dir(prompts);
// });
