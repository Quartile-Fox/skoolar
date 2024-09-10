"use server";
import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function getGroupByID(groupID) {
  try {
    const res = await fetch(`${BASE_URL}/api/group/${groupID}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
}
