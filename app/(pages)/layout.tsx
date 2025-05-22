import NavMenu from "@/components/NavMenu";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function EshopLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <NavMenu />
      <main className="container">{children}</main>
      <footer className="pt-28"></footer>
    </>
  );
}
