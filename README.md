# askAllQuestions
Read one or more lines in Node.JS.

## Example:
	var askAllQuestions = require('askAllQuestions');
	
    askAllQuestions([
            { name: 'user', question: 'user: ' },
            { name: 'password', question: 'password: ' },
            { name: 'applicationName', question: 'application name: ' },
            { name: 'applicationPath', question: 'application path: ' }
        ], function (prompts) {
        console.dir(prompts);
    });

It's show the questions:
```sh
	user: lvendrame
	password: myPassword
	application name: myApp
	application path: c:\projects\myProject
```

It's return:
```sh
	[ user: 'lven',
	  password: 'teste',
	  applicationName: 'myApp',
	  applicationPath: 'c:\\teste\\karai' ]
```