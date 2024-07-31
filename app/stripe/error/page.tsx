import { Frown } from "lucide-react";

export default function ErrorStripe() {
  return (
    <div className="py-10 text-center">
      <h2 className="flex justify-center">
        Опа! Нещо се счупи..
        <Frown />
      </h2>
    </div>
  );
}
