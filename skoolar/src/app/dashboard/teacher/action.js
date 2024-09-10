"use server";
import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export async function getGroupTeacher(groupId) {
  try {
    const res = await fetch(`${BASE_URL}/api/group/${groupId}`, {
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
