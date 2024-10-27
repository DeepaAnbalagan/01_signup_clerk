import sql from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const reqBody = await request.json();
        console.log(reqBody)
        const query = "INSERT INTO innovator (user_name, user_code, user_id) VALUES ($1, $2, $3)";
        const res = await sql(query, [reqBody.name, reqBody.code]);

        console.log(res.rows);

        return NextResponse.json({ msg: "All good, success" }, { status: 200 });
    } catch (error) {
        console.error("Database error:", error);

        // Return error response with status 500
        return NextResponse.json({ error: "Database insert failed" }, { status: 500 });
    }
}
