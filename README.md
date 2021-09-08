# ENVIO_EMAIL_NODEJS

## Envio de Email faker

- de acordo com a documentation

	    let testAccount = await nodemailer.createTestAccount();
	    let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, 
		auth: {
		  user: testAccount.user, 
		  pass: testAccount.pass, 
	   	 },
	    });
	    
	    let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', 
		to: "bar@example.com, baz@example.com", 
		subject: "Hello ✔", 
		text: "Hello world?", 
		html: "<b>Hello world?</b>", 
	    });


- no postman

[ x ] - http://localhost:3333/sender

no body - passe essas propriedades

	{ 
		"from": "teste <teste@teste.com>", 
		"to":"emailSender@email.com", 
		"subject": "envio de email pelo nodejs", 
		"text": "Eae , estou lhe enviando uma pequena message para voce! :)"
	}

- se tudo ocorrer como se deve :), aparecera um JSON com algumas infos
- nela tera propriedade chamada "acessEmailTest" nela esta contida a URL do email de teste.

## config package.json 

	  "scripts": {
	    "dev": "ts-node-dev src/service.ts"
	  },
	  "dependencies": {
	    "express": "^4.17.1",
	    "express-async-errors": "^3.1.1",
	    "nodemailer": "^6.6.3"
	  },
	  "devDependencies": {
	    "@types/nodemailer": "^6.4.4",
	    "@types/express": "^4.17.13",
	    "ts-node-dev": "^1.1.8",
	    "typescript": "^4.4.2"
	  }

## instalation dependencies
  yarn add express express-async-errors nodemailer <br>
  yarn add @types/nodemailer @types/express ts-node-dev typescript -D
