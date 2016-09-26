const app = require('express')();
const rules = require('./routers/rules');
const cors = require('cors');


app.use(cors());

app.use('/rules', rules);

try {
	app.listen(8080, () => {
		console.log('Server running');
	});
} catch(e) {
	console.log('Server already running');
}
