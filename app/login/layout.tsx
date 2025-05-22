import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function LoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/cakes");
  }

  return (
    <>
      <main className="container">{children}</main>
    </>
  );
}
