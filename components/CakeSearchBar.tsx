"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CakeSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setMinPrice(searchParams.get("minPrice") || "");
    setMaxPrice(searchParams.get("maxPrice") || "");
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim() && !minPrice.trim() && !maxPrice.trim()) {
      return;
    }

    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);

    router.push(`/cakes/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex w-full items-center space-x-2">
        <Input
          type="search"
          placeholder="Search cakes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Input
          className="w-[18rem]"
          type="number"
          placeholder="Min Price"
          value={minPrice}
          min={0}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <Input
          className="w-[18rem]"
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          min={0}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <Button type="submit">
          <Search />
          Search
        </Button>
      </div>
    </form>
  );
}
