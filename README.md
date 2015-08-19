# ask-all-questions
Simple Node.JS module to show and read many questions on command line applications.

## Installation

Run the command:

```
npm i ask-all-questions
```

## Example:
```
var askAllQuestions = require('ask-all-questions');

askAllQuestions([
	{ name: 'user', question: 'user: ' },
	{ name: 'password', question: 'password: ' },
	{ name: 'applicationName', question: 'application name: ' },
	{ name: 'applicationPath', question: 'application path: ' }
], function (prompts) {
	console.dir(prompts);
});
```

This shows these questions:

```sh
	user: myUserName
	password: myPassword
	application name: myApp
	application path: c:\projects\myProject
```

and print:

```sh
	[ user: 'myUserName',
	  password: 'myPassword',
	  applicationName: 'myApp',
	  applicationPath: 'c:\\projects\\myProject' ]
```
