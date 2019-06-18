export const BLUE = 'BLUE';
export const text = 'this text from  constants file';
let mysql = require('mysql');
export let connection = mysql.createConnection({
	host: "localhost",
    user: "root",
    password: "pop@123",
    database: "Apollo"
});