import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/app/types";
import { SignOutButton } from "@/components/buttons";
import CountCard from "@/components/CountCard";
import { Button } from "@/components/ui/button";
import UserProfile from "@/components/UserProfile";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export default async function UserDetail({ params }: Props) {
  const res = await fetch(`http://localhost:3000/api/users/${params.id}`);
  const user: User = await res.json();

  const session = await getServerSession(authOptions);
  let myAccout = false;

  if (session?.user.id === params.id) {
    console.log("My account = true");
    myAccout = true;
  }

  const { name, image, reviews } = user ?? {};

  console.log(reviews);

  return (
    <>
      <h2>User Profile</h2>
      <UserProfile name={name} image={image} />
      <section className="flex flex-row gap-4 pt-4">
        <CountCard name={"Orders"} value={0} />
        <CountCard name={"Reviews"} value={reviews?.length} />
      </section>
      {myAccout ? (
        <section className="profile-btns flex flex-row justify-center items-center gap-4 mt-4">
          <Link href={`/profile/${params.id}`}>
            <Button>Change Credentials</Button>
          </Link>
          <SignOutButton />
        </section>
      ) : (
        ""
      )}
    </>
  );
}
