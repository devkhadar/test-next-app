import { connect } from "@/resources/dbconfig/dbconfig";
import userModel, { User } from "@/resources/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST(params: NextRequest) {
    try {
        const reqBody: User = await params.json();
        console.log(reqBody)

        const user = await userModel.findOne({ email: reqBody.email })

        if (!user) {
            const salt = await bcryptjs.genSalt(10);
            const hash = await bcryptjs.hash("", salt);
            const newUser = new userModel({ userName: reqBody.userName, password: hash, email: reqBody.email })
            await newUser.save();
        }

        return NextResponse.json({ reqBody });
    } catch (e) {
        return NextResponse.json({ msg: e });
    }
}

export async function GET(params: NextRequest) {
    return NextResponse.json({ msg: "Test" });
}