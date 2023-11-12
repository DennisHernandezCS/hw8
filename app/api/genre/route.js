import db from'@/lib/db';
import { NextResponse } from 'next/server'

export const GET = async (req, res) => {  

  const [rows] = await db.query('SELECT * FROM genre');
  console.log(rows);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return NextResponse.json({data});
};


