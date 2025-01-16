import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <h1>Taekwon-Do is an ART</h1>
      <Card>
        <CardContent>
          <p>Do you want to train your mind and body?</p>
        </CardContent>
        <CardFooter>
          <Button>Join Us</Button>
        </CardFooter>
      </Card>
    </>
  );
}
