import { NextRequest, NextResponse } from "next/server";

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
  // If invalid, return 400
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  // Fetch the user
  // If does not exist, return 404
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Update the user
  // Return the updated user
  return NextResponse.json({ id, name: body.name });
}
