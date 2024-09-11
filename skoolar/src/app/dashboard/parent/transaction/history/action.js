"use server";

import { cookies } from "next/headers";

export async function getTransactionDetail(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/transactions/${id}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const result = await res.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}