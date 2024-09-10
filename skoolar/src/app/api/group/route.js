import { NextResponse } from "next/server";
import Joi from "joi";
import { createGroup } from "../../../db/models/Group";

const schema = Joi.object({
  groupName: Joi.string().required().min(4).max(30),
  userId: Joi.string().required(),
});

export async function POST(request) {
  try {
    const { groupName, userId } = await request.json();
    const { error } = schema.validate({ groupName, userId });

    if (error) {
      return NextResponse.json({
        statusCode: 400,
        message: error.details[0].message,
        data: [],
      });
    }

    // Assuming you need to create a group with provided data
    const groupId = await createGroup({ name: groupName, userId });

    return NextResponse.json({
      statusCode: 201,
      message: "Success Created Group!",
      data: { groupId },
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error!",
      data: [],
    });
  }
}

export async function GET(request) {
  const userId = request.headers.get("x-user-id");

  try {
    const { error } = schema.validate({ userId });

    if (error) {
      return NextResponse.json({
        statusCode: 400,
        message: error.details[0].message,
        data: [],
      });
    }

    const groups = await getGroupWhereIncludeUserId(userId);

    return NextResponse.json({
      statusCode: 200,
      message: "Success fetched groups!",
      data: groups,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error!",
      data: [],
    });
  }
}

export async function DELETE(request) {
  const userId = request.headers.get("x-user-id");

  try {
    if (!userId) {
      return NextResponse.json({
        statusCode: 400,
        message: "Invalid user ID",
        data: [],
        error: "BAD REQUEST",
      });
    }

    // Assuming you need to delete a group by userId (implementation might vary)
    const groupId = request.headers.get("x-group-id"); // This should be passed in headers or query params
    const success = await deleteGroup(groupId);

    if (!success) {
      return NextResponse.json({
        statusCode: 404,
        message: "Group not found",
        data: [],
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "Success leave group",
      data: [],
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error!",
      data: [],
    });
  }
}
