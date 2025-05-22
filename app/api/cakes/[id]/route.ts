import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const cake = await prisma.cakeFlavor.findUnique({
    where: { id },
    include: {
      reviews: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!cake) {
    return NextResponse.json({ error: "Cake not found" }, { status: 404 });
  }

  return NextResponse.json(cake);
}
