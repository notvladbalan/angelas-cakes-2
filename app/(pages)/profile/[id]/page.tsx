import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/app/types";
import { ProfileForm } from "@/components/ProfileForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProfileCredentials({ params }: Props) {
  const res = await fetch(`http://localhost:3000/api/users/${params.id}`);
  const user: User = await res.json();

  const session = await getServerSession(authOptions);

  if (session?.user.id !== params.id) {
    redirect("/");
  }

  return (
    <>
      <ProfileForm user={user} />
    </>
  );
}
