import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ user });
}

// Use put for replacing
// Use patch for updating some properties
export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  // Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  // If invalid, return 400
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the user
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  // If does not exist, return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Update the user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  // Return the updated user
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  // Fetch user from db
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  // If does not exist, return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete the user
  await prisma.user.delete({
    where: { id: user.id },
  });
  // Return 200
  return NextResponse.json({});
}
