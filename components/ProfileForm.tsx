"use client";

import { User } from "@/app/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ProfileFormProps {
  user: User;
}

export function ProfileForm({ user }: ProfileFormProps) {
  const [loading, setLoading] = useState(false);

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      phone: formData.get("phone"),
    };

    try {
      const res = await fetch("/api/users", {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        alert("Profile updated!");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Your Profile</h2>
      <form onSubmit={updateUser} className="flex flex-col gap-4">
        <label>
          Name
          <Input type="text" name="name" defaultValue={user?.name ?? ""} />
        </label>

        <label>
          Age
          <Input
            type="number"
            name="age"
            min={0}
            defaultValue={user?.age ?? ""}
          />
        </label>

        <label>
          Phone
          <Input
            type="tel"
            name="phone"
            defaultValue={user?.phone ?? ""}
            placeholder="123456789"
          />
        </label>

        <label>
          Bio
          <Textarea
            name="bio"
            cols={30}
            rows={5}
            defaultValue={user?.bio ?? ""}
          />
        </label>

        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="animate-spin" /> Submitting...
            </>
          ) : (
            "Submit Changes"
          )}
        </Button>
      </form>
    </div>
  );
}
