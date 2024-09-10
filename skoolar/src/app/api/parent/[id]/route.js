"use server";
import { NextResponse } from "next/server";
import { getParentById, getParentOrUser } from "../../../../db/models/Parent";

export async function GET(request) {
  const otherId = request.headers.get("id");
  try {
    const data = await getParentOrUser(otherId);
    return NextResponse.json({
      statusCode: 200,
      message: "Succes create Parent User",
      data,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}
