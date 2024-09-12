// "use server";
import { NextResponse } from "next/server";
import { getAllTransaction } from "../../../db/models/Transaction";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export async function GET() {
  try {
    const data = await getAllTransaction();
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
