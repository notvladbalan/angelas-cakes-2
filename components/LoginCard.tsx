import Image from "next/image";
import { SignInButton } from "./buttons";
import { Card } from "./ui/card";

export default async function LoginCard() {
  return (
    <Card className="p-6 flex flex-row gap-8">
      <div>
        <Image
          className="rounded-xl"
          src="/images/login-page-cake.png"
          alt=""
          height={350}
          width={350}
        />
      </div>
      <section className="flex flex-col items-center justify-center pr-6">
        <h2>Sign up</h2>
        <SignInButton />
      </section>
    </Card>
  );
}
