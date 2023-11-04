import { connect } from "@/resources/dbconfig/dbconfig";
import userModel, { User } from "@/resources/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST(params: NextRequest) {
    try {
        const reqBody: User = await params.json();
        const user = await userModel.findOne({ email: reqBody.email })

        if (!user) {
            const salt = await bcryptjs.genSalt(10);
            const hash = await bcryptjs.hash("", salt);
            const savedUser = await new userModel({ userName: reqBody.userName, password: hash, email: reqBody.email, lat: reqBody.lat, lng: reqBody.lng }).save();
            return NextResponse.json({ savedUser });
        }
        throw "Email exists";
    } catch (e) {
        return NextResponse.json({ msg: e, status: 500 });
    }
}

export async function GET(params: NextRequest) {
    return NextResponse.json({ msg: "Test" });
}