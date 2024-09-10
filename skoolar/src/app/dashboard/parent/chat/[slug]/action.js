"use server";
import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function groupId(id) {
  try {
    const res = await fetch(`${BASE_URL}/api/group/${id}`, {
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
