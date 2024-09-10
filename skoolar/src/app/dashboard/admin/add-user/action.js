"use server"

import { cookies } from "next/headers";

export async function getGroup(params) {
    try {
        const response = await fetch('http://localhost:3000/api/getOneGroup', {
            headers: {
                Cookie: cookies().toString()
            }
        })
        const { data } = await response.json();

        console.log(data, "data di actionnn");


        return data
    } catch (error) {
        console.log(error);

    }

}