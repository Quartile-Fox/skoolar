"use server";
import { cookies } from "next/headers";

export async function getGroupTeacher(groupId) {
  try {
    const res = await fetch(`http://localhost:3000/api/group/${groupId}`, {
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
