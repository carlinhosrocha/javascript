const express = require("express");
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/about', (req, res) =>{
	res.json({
		name: 'Carlos',
		email: 'carlinhozrocha@gmail.com',
		github: 'https://gituhub.com/carlinhosrocha'
	})
})	

app.get('/', (req, res) =>{
	res.json({
		msg:'OK!'
	})
})

app.listen(PORT, () => {
	console.log('Escutando na porta: ' + PORT);
})