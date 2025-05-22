import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CakeFlavor } from "@/app/types";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "@/components/ReviewForm";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(`http://localhost:3000/api/cakes/${params.id}`);
  const cake: CakeFlavor = await res.json();
  return { title: `Detail of ${cake?.name}` };
}

export default async function CakeDetail({ params }: Props) {
  const res = await fetch(`http://localhost:3000/api/cakes/${params.id}`);
  const cake: CakeFlavor = await res.json();

  const { name, price, image, description, reviews } = cake ?? {};
  const session = await getServerSession(authOptions);
  console.log("Session: ", session);
  const userId = session?.user.id;

  return (
    <>
      <section className="flex flex-row items-center justify-between mb-24">
        <div>
          <h1>{name}</h1>

          <section className="flex flex-col gap-4">
            <div className="w-[35rem]">
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            <h3>Price: ${price}</h3>
          </section>
        </div>

        <div className="w-[350px] h-[350px] overflow-hidden relative rounded-lg">
          <Image
            src={image ?? "/cake1.jpg"}
            fill
            className="object-cover object-center"
            alt={`${name}'s profile`}
          />
        </div>
      </section>
      <section>
        <h2>Reviews</h2>
        <div className="flex flex-col gap-4">
          {reviews && reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewCard key={review.id} {...review} userId={userId} />
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
        <div className="pt-4">
          <ReviewForm cakeId={Number(params.id)} userId={userId} />
        </div>
      </section>
    </>
  );
}
