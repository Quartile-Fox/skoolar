"use server";
import Midtrans from "midtrans-client";
import {
  createTransaction,
  getTransactionByParentId,
  updateTransaction,
} from "../../../db/models/Transaction";
import { NextResponse } from "next/server";
import { generateUniqueOrderId } from "../../../db/utils/timestamp";
import { updateStudentGroup } from "../../../db/models/Group";
let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY_MIDTRANS,
  clientKey: process.env.CLIENT_KEY_MIDTRANS,
});

export async function GET(request) {
  const parent_id = request.headers.get("x-user-id");
  try {
    const data = await getTransactionByParentId(parent_id);
    return NextResponse.json({
      statusCode: 200,
      message: "success get all transaction by parentid",
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}

export async function POST(request) {
  const parent_id = request.headers.get("x-user-id");
  const { description, amount, due_date } = await request.json();

  const order_id = generateUniqueOrderId();

  let parameter = {
    transaction_details: {
      order_id: order_id,
      gross_amount: amount,
    },
  };

  // const result = await createTransaction(transaction);

  const token = await snap.createTransactionToken(parameter);
  return Response.json({
    token,
  });
}

export async function PATCH(request) {
  // const parent_id = request.headers.get("x-user-id");
  const order_id = request.json();

  console.log(order_id, "ini order id yang di terima");
  const result = updateTransaction(order_id);
  console.log(result, " ini hasil update");
  return Response.json({
    result,
  });
}
