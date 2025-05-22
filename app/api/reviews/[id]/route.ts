import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const reviewId = Number(params.id);
  if (isNaN(reviewId)) {
    return NextResponse.json({ error: "Invalid review ID" }, { status: 400 });
  }

  try {
    await prisma.review.delete({
      where: { id: reviewId },
    });

    return NextResponse.json({ message: "Review deleted" });
  } catch (error) {
    console.error("Failed to delete review:", error);
    return NextResponse.json(
      { error: "Failed to delete review" },
      { status: 500 }
    );
  }
}
