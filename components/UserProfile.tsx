import { User } from "@/app/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

export default function UserProfile({ name, image }: User) {
  return (
    <Card className="pt-12 pb-6 flex flex-col items-center justify-center">
      <Avatar className="w-[10rem] h-[10rem]">
        <AvatarImage src={image ?? ""} alt="" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <h2>{name}</h2>
    </Card>
  );
}
