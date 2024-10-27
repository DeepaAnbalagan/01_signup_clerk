import sql from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
    console.log("inside geninfinity api puru");


    const jsonBody = await request.json();
console.log("inside api router"+jsonBody);
    const query = "insert into innovator (user_name, user_code) values ($1, $2)";
    const res = await sql(query, [jsonBody.name, jsonBody.code]);

    console.log(res.rows);
    return NextResponse.json({msg:"all good success"}, {status: 200});

}