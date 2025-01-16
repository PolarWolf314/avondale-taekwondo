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
            Taekwon-Do offers a multitude of benefits beyond physical fitness.
            Experience improved focus, discipline, and self-confidence as you
            progress through your training. Enhance your mental and emotional
            well-being while developing a strong and resilient spirit. Discover
            how Taekwon-Do can positively impact your life on and off the
            training mat.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tradition, discipline, respect</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Immerse yourself in the essence of Taekwon-Do—a martial art deeply
            rooted in tradition, discipline, and respect. Experience the ancient
            wisdom passed down through generations as you train with our
            passionate instructors. Discover the profound values of courtesy,
            integrity, perseverance, self control, and indomitable spirit.
            Foster a personal growth and a sense of honour within our Taekwon-Do
            community.
          </p>
        </CardContent>
      </Card>

      <div>
        <Button>Learn more about us</Button>
        <Button>Contact us</Button>
      </div>
    </>
  );
}
