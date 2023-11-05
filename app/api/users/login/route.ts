import { connect } from "@/resources/dbconfig/dbconfig";
import userModel, { User } from "@/resources/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(params: NextRequest) {
  try {
    const { email, password } = await params.json();
    const user = await userModel.findOne<User>({
      email: { $regex: email, $options: "i" },
    });

    if (!user)
      return NextResponse.json({
        msg: "Invalid usernameor password",
        status: 400,
      });

    const validPassword = await bcryptjs.compare(password, user.password);
    console.log("validPassword", user, password);
    if (!validPassword)
      return NextResponse.json({
        msg: "Invalid usernameor password",
        status: 400,
      });

    //create token
    const tokenData = {
      id: user._id,
      userName: user.userName,
      email: user.email,
    };

    const token = jwt.sign(tokenData, "MY_SUPER_SECRET_KEY", {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      msg: "success",
      token: token,
      status: 200,
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (e) {
    return NextResponse.json({ msg: e });
  }
}

export async function GET(params: NextRequest) {
  const user = await userModel.findOne({
    email: { $regex: "KHADAR123213@gmail.com", $options: "i" },
  });
  return NextResponse.json({ msg: user });
}
