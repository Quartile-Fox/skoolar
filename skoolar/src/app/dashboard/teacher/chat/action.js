"use server";
import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function getAllGroup() {
  try {
    const res = await fetch(`${BASE_URL}/api/group`, {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });

    if (!res.ok) {
      throw new Error(`Error fetching groups: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching groups: ", error);
    throw error;
  }
}
