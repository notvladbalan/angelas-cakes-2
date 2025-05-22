import { Card } from "./ui/card";

interface CountCardProps {
  name: string;
  value?: number;
}

export default function CountCard({ name, value = 0 }: CountCardProps) {
  return (
    <Card className="p-6 w-full flex flex-col items-center justify-center gap-2">
      <h3 className="p-0 m-0">{name}</h3>
      <p className="headline card-value">{value}</p>
    </Card>
  );
}
