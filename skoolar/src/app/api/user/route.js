import { NextResponse } from "next/server";
import { getUser } from "../../../db/models/User";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

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

export async function POST() {
  try {
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
