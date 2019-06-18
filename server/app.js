import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import bodyParser from 'body-parser';
let mysql = require('mysql');
// Check alternative_db.js for localhost connection

var uri = 'mongodb://user:pass@ds151049.mlab.com:51049/odeum_api';
var options = {
  user: 'MyDBUser',
  pass: 'QaDeXvG'
}

/*mongoose.connect(uri, options, () => {
  console.log('Connected to MongoDB...');
  console.log('');
});
*/
let connection = mysql.createConnection({
	host: "localhost",
    user: "root",
    password: "pop@123",
    database: "Apollo"
});
connection.connect((err) => {
	if (err) throw err;
    console.log("Connected!");
})

const app = express();

// Middelware
app.use(bodyParser.json());
app.use('/api', routes);

export default app;

console.log('Executing Server: app.js ...');
