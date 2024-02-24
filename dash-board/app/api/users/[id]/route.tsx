import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id, name: "Castamere" });
}
