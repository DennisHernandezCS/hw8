import mysql from "mysql2/promise";

const databaseName = process.env.MYSQL_DATABASE || "music1_db";

export async function query({ query, values = [] }) {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: databaseName,
  });

  try {
    const [results] = await connection.execute(query, values);
    connection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error: error.message };
  }
}
