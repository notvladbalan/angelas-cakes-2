import { CakeFlavor } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

export default function SearchCakeCard({
  id,
  name,
  price,
  image,
  description,
}: CakeFlavor) {
  return (
    <Link href={`/cakes/${id}`}>
      <Card className="p-6 flex flex-row justify-between">
        <section>
          <h2 className="seach-cake-h2">{name}</h2>
          <section className="w-[35rem] flex flex-col gap-4">
            <div>
              <span className="headline">Desription:</span>
              <p>{description}</p>
            </div>
            <span className="headline">Price: ${price}</span>
          </section>
        </section>
        <div className="flex justify-center align-middle">
          <div className="w-[200px] h-[200px] overflow-hidden relative rounded-lg">
            <Image
              src={image ?? "/cake1.jpg"}
              alt={`${name}'s profile`}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </Card>
    </Link>
  );
}
