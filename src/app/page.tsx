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

      <Card>
        <CardHeader>
          <CardTitle>Discover the art of Taekwon-Do</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Explore the fundamental techniques of Taekwon-Do, such as kicks,
            punches, and blocks. Learn the proper forms and stances to execute
            powerful and precise movements. Whether you're a beginner or an
            experienced practitioner, our expert instructors will guide you on
            the path to mastery.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Unlock your inner strength</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Explore the fundamental techniques of Taekwon-Do, such as kicks,
            punches, and blocks. Learn the proper forms and stances to execute
            powerful and precise movements. Whether you're a beginner or an
            experienced practitioner, our expert instructors will guide you on
            the path to mastery.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tradition, discipline, respect</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Explore the fundamental techniques of Taekwon-Do, such as kicks,
            punches, and blocks. Learn the proper forms and stances to execute
            powerful and precise movements. Whether you're a beginner or an
            experienced practitioner, our expert instructors will guide you on
            the path to mastery.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
