import { NextResponse } from "next/server";
import { createUser, getUser } from "../../../db/models/User";

export async function GET() {
  try {
    const data = await getUser();

    return NextResponse.json({
      statusCode: 200,
      message: "Succes get all user",
      data: data,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}

export async function POST(req, res) {
  try {
    const { NIK, password, email, name, role, SchoolId, GroupId } = req.body;
    console.log("di API nih ");
    console.log(req.body.get('email'), "di API");
    const payload = { NIK, password, email, name, role, SchoolId, GroupId }
    const data = await createUser(payload);

    console.log("yeay berhasil post di API");

  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}
export async function PUT() {
  try {
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}
export async function DELETE() {
  try {
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}
