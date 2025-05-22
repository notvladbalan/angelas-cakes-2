import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search")?.toLowerCase() || "";
  const minPrice = parseFloat(searchParams.get("minPrice") || "0");
  const maxPrice = parseFloat(searchParams.get("maxPrice") || "1000000");

  const cakes = await prisma.cakeFlavor.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
      price: {
        gte: minPrice,
        lte: maxPrice,
      },
    },
  });

  return NextResponse.json(cakes);
}
