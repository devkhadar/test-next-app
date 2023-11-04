import { connect } from "@/resources/dbconfig/dbconfig";
import userModel, { User } from "@/resources/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(params: NextRequest) {
    try {
        const reqBody: User = await params.json();

        return NextResponse.json({ reqBody });
    } catch (e) {
        return NextResponse.json({ msg: e });
    }
}

export async function GET(params: NextRequest) {
    const user = await userModel.findOne({ email: "khadar123213@gmail.com" })
    return NextResponse.json({ msg: user });
}