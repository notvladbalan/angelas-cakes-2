import { CakeFlavor } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function CakeCard({ id, name, price, image }: CakeFlavor) {
  return (
    <Link href={`/cakes/${id}`}>
      <Card>
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

        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>Price: ${price}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
