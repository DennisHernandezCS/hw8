import { query } from'@/lib/db';
import { NextResponse } from 'next/server'

export async function GET(req, res) {  

  const rows = await query({
    query: 'SELECT * FROM user',
    values: [],
  });

  const data = JSON.stringify(rows);
  

  return new Response(data, {status: 200});
};


