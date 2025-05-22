import { User } from "@/app/types";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function CommentUser({ name, image, id }: User) {
  return (
    <>
      <Link href={`/users/${id}`} className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={image ?? ""} alt="" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <span className="headline">{name}</span>
      </Link>
    </>
  );
}
