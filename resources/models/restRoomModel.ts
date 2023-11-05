import mongoose from "mongoose";

export interface RestRoom {
  name: string;
  location: String;
  rating: number;
  isVerified?: Boolean;
  lat: number;
  lng: Number;
  _id: string;
  imageURL: string;
  distance:0;
  description:string;
}

const restRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    trim: true,
  },
  rating: {
    type: Number,
    default:0
  },
  isVerified: {
    default: false,
    type: Boolean,
  },
  lat: {
    type: Number,
    required: [true, "Please provide lattitude"],
  },
  lng: {
    type: Number,
    required: [true, "Please provide longitutde"],
  },
  imageURL: {
    type: String,
    default: null,
  },
});

export default mongoose.models.restroom ||
  mongoose.model("restroom", restRoomSchema);
