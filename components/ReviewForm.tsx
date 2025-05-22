"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";

interface ReviewFormProps {
  cakeId: number;
  userId?: string;
}

export default function ReviewForm({ cakeId, userId }: ReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (comment.trim() === "") {
      setError("Please write a comment before submitting.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(`/api/cakes/${cakeId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, comment, userId }),
      });

      if (res.ok) {
        alert("Profile updated!");
      } else {
        alert("Failed to submit review.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting review.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h3>Add Review</h3>
        <section className="flex flex-col gap-4">
          <label className="flex flex-row gap-4">
            Rating:
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="text-xl"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {"★".repeat(n) + "☆".repeat(5 - n)}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            Comment:
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type your message here."
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </label>
        </section>
        <Button className="mt-4" type="submit" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="animate-spin" /> Plase wait
            </>
          ) : (
            "Submit Review"
          )}
        </Button>
      </form>
    </Card>
  );
}
