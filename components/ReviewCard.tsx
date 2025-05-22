"use client";

import { Review } from "@/app/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import CommentUser from "./CommentUser";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface ReviewCardProps extends Review {
  userId?: string | null;
}

export default function ReviewCard({
  id,
  comment,
  rating,
  user,
  userId,
}: ReviewCardProps) {
  let myReview = false;
  const [isDeleting, setIsDeleting] = useState(false);

  if (userId === user?.id) {
    myReview = true;
  }

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this review?")) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Review successfully deleted.");
      } else {
        alert("Failed to delete review.");
      }
    } catch (error) {
      alert("An error occurred.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-row justify-between">
            <CommentUser {...user} />
            {myReview && (
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="animate-spin" /> Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </Button>
            )}
          </CardTitle>
          <section className="pt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={
                    index < rating ? "fill-yellow-500" : "fill-gray-300"
                  }
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 20.017 4.665 24 6 15.595 0 9.748l8.332-1.73L12 .587z" />
                </svg>
              ))}
            </div>
            <div className="pt-2">{comment}</div>
          </section>
        </CardHeader>
      </Card>
    </>
  );
}
