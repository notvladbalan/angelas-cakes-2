import CakeCard from "@/components/CakeCard";
import CakeSearchBar from "@/components/CakeSearchBar";
import { CakeFlavor } from "../../types";

export default async function Cakes() {
  const res = await fetch(`http://localhost:3000/api/cakes`);
  const cakes: CakeFlavor[] = await res.json();

  return (
    <>
      <h2>Cakes</h2>
      <CakeSearchBar />
      <div className="grid grid-cols-4 gap-4">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} {...cake} />
        ))}
      </div>
    </>
  );
}
