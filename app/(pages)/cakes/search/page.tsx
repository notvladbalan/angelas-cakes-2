// app/cakes/search/page.tsx
"use client";

import { CakeFlavor } from "@/app/types";
import CakeSearchBar from "@/components/CakeSearchBar";
import SearchCakeCard from "@/components/SearchCakeCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CakeSearchPage() {
  const searchParams = useSearchParams();
  const [cakes, setCakes] = useState<CakeFlavor[]>([]);

  useEffect(() => {
    const query = new URLSearchParams();
    const search = searchParams.get("search");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (search) query.set("search", search);
    if (minPrice) query.set("minPrice", minPrice);
    if (maxPrice) query.set("maxPrice", maxPrice);

    fetch(`/api/cakes/search?${query.toString()}`)
      .then((res) => res.json())
      .then(setCakes);
  }, [searchParams]);

  return (
    <div>
      <h2>Search Results</h2>
      <CakeSearchBar />
      <section className="flex flex-col gap-4">
        {cakes.length > 0 ? (
          cakes.map((cake) => <SearchCakeCard key={cake.id} {...cake} />)
        ) : (
          <p>No cakes found.</p>
        )}
      </section>
    </div>
  );
}
