import { connect } from "@/resources/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import restRoomModel, { RestRoom } from "@/resources/models/restRoomModel";

connect();

export async function POST(params: NextRequest) {
  try {
    const { name, location, lat, lng, imageURL } = await params.json();

    const data = await new restRoomModel({
      name: name,
      location: location,
      lat: lat,
      lng: lng,
      imageURL: imageURL || "https://flowbite.com/docs/images/blog/image-1.jpg",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    }).save();
    return NextResponse.json({
      msg: "success",
      token: data,
      status: 200,
    });
  } catch (e) {
    return NextResponse.json({ msg: e });
  }
}

export async function GET(params: NextRequest) {
  return NextResponse.json({ data: await restRoomModel.find<RestRoom>() });
}
