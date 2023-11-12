import { createConnection } from 'mysql2';

const databaseName = process.env.MYSQL_DATABASE || 'music1_db';

const connection = createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: databaseName,
});

connection.connect(error => {
  if (error) throw error;
  console.log(`Successfully connected to the ${databaseName.toUpperCase()} database.`);
});

export default connection;
