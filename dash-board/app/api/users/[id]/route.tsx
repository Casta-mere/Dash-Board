import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id, name: "Castamere" });
}

// Use put for replacing
// Use patch for updating some properties
export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  // Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  // If invalid, return 400
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the user
  // If does not exist, return 404
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Update the user
  // Return the updated user
  return NextResponse.json({ id, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  // Fetch user from db
  // If does not exist, return 404
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete the user
  // Return 200
  return NextResponse.json({});
}
