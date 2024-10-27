import sql from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET (request: Request) {

    try {
        const result = await sql("SELECT * FROM user_tag_hdr");

        return NextResponse.json(result.rows, {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Database query error:', error);

        // Return an error response if the query fails
        return NextResponse.json({ error: 'Database query failed' }, {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}