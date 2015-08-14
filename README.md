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