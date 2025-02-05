import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <section className="flex-grow">
      <Card>
        <CardHeader>
          <CardTitle>Casual</CardTitle>
          <CardDescription>
            The perfect start to your Taekwon-Do journey. No strings attached.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            $20<span>/session</span>
          </div>
          <Check />
          Pay-as-you-go flexibility
          <Check />
          No commitment required
          <Check />
          Access to all regular classes
          <Check />
          Ideal for drop in training
        </CardContent>
      </Card>
    </section>
  );
}
