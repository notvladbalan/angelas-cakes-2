import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const cakeId = Number(params.id);
  if (isNaN(cakeId)) {
    return NextResponse.json({ error: "Invalid cake ID" }, { status: 400 });
  }

  const body = await request.json();
  const { rating, comment, userId } = body;

  if (!rating || !comment || !userId) {
    return NextResponse.json(
      { error: "Rating, comment and userId are required" },
      { status: 400 }
    );
  }

  try {
    const newReview = await prisma.review.create({
      data: {
        cake_flavor_id: cakeId,
        rating,
        comment,
        user_id: userId,
      },
    });

    return NextResponse.json(newReview);
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}
