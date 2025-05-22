import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "./buttons";

export default async function NavMenu() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  return (
    <div className="relative">
      <nav className="navbar mb-8 shadow-md">
        <div className="container flex flex-row justify-between items-center py-1">
          <section>
            <Link href={`/cakes`}>
              <Image src={"/long-logo.png"} alt={""} width={200} height={200} />
            </Link>
          </section>
          <section>
            <ul className="flex flex-row gap-12 items-center justify-center">
              <li>
                <Link href={"/cakes"}>Cakes</Link>
              </li>
              <li>
                <Link href={`/users/${userId}`}>Profile</Link>
              </li>
              <li>
                <SignInButton />
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </div>
  );
}
