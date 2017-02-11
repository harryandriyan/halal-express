// Importing node modules
import express from 'express';
import bodyParser from 'body-parser';
// Importing source files
import api from './routes/api.routes';
import web from './routes/web.routes';
// consts
const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.use('/', web);
app.use('/api', api);

// arrow functions
const server = app.listen(3000, () => {
	// destructuring
  const {address, port} = server.address();

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});
