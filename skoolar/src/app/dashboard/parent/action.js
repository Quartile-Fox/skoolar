"use server";
import { cookies } from "next/headers";

export async function getMe() {
  try {
    const res = await fetch("https://skoolar-app.vercel.app/api/parent", {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });

    const { data } = await res.json();

    let newData;
    if (!data?.role) {
      newData = {
        _id: data._id,
        name: data.studentName,
        GroupId: data.GroupId,
        NISN: data.NISN,
      };
    } else {
      newData = {
        _id: data._id,
        name: data.name,
        GroupId: data.GroupId,
      };
    }

    return newData;
  } catch (error) {
    throw error;
  }
}

export async function getAllGroup() {
  try {
    const res = await fetch("https://skoolar-app.vercel.app/api/group", {
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

export async function getSchoolAnnouncement() {
  try {
    const res = await fetch("https://skoolar-app.vercel.app/api/announcement", {
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

export async function getAllNotification() {
  try {
    const response = await fetch(
      "https://skoolar-app.vercel.app/api/notification",
      {
        cache: "no-store",
        method: "GET",
        headers: {
          Cookie: cookies().toString(),
        },
      }
    );
    const { data } = await response.json();

    console.log(data, "<<< action notif");

    // const result = data.filter((el) => el.role === "teacher");

    return data;
  } catch (error) {
    console.error("Error fetching groups: ", error);
    throw error;
  }
}
