import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const cakes = await prisma.cakeFlavor.findMany();

  return NextResponse.json(cakes);
}
