"use server";
import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function getTransactions() {
  try {
    const res = await fetch(`${BASE_URL}/api/transaction`, {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });

    const result = await res.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function createTransaction() {
  try {
    const res = await fetch(`${BASE_URL}/api/transaction`, {
      cache: "no-store",
      method: "POST",
      headers: {
        Cookie: cookies().toString(),
      },
    });

    const result = await res.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateTransaction(order_id) {
  const res = await fetch(`${BASE_URL}/api/transaction`, {
    method: "PATCH",
    headers: {
      Coookie: cookies().toString(),
    },
    body: JSON.stringify(order_id),
  });

  const result = await res.json();
  return result;
}
