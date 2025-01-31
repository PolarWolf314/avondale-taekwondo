import { Hero } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mt-32 grid flex-col w-screen gap-8 lg:gap-12 px-8 sm:px-16 lg:px-32">
        <Card className="md:w-96 lg:w-[38rem] place-self-start px-3 py-2 rounded-none">
          <CardHeader>
            <CardTitle className="text-lg">
              Discover the art of Taekwon-Do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Explore the fundamental techniques of Taekwon-Do, such as kicks,
              punches, and blocks. Learn the proper forms and stances to execute
              powerful and precise movements. Whether you&apos;re a beginner or
              an experienced practitioner, our expert instructors will guide you
              on the path to mastery.
            </p>
          </CardContent>
        </Card>
        <Card className="md:w-96 lg:w-[38rem] place-self-end px-3 py-2 rounded-none">
          <CardHeader>
            <CardTitle className="text-lg">
              Unlock your inner strength
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Taekwon-Do offers a multitude of benefits beyond physical fitness.
              Experience improved focus, discipline, and self-confidence as you
              progress through your training. Enhance your mental and emotional
              well-being while developing a strong and resilient spirit.
              Discover how Taekwon-Do can positively impact your life on and off
              the training mat.
            </p>
          </CardContent>
        </Card>
        <Card className="md:w-96 lg:w-[38rem] place-self-start px-3 py-2 rounded-none">
          <CardHeader>
            <CardTitle className="text-lg">
              Tradition, discipline, respect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Immerse yourself in the essence of Taekwon-Do—a martial art deeply
              rooted in tradition, discipline, and respect. Experience the
              ancient wisdom passed down through generations as you train with
              our passionate instructors. Discover the profound values of
              courtesy, integrity, perseverance, self control, and indomitable
              spirit. Foster a personal growth and a sense of honour within our
              Taekwon-Do community.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-row gap-4 sm:gap-16 md:gap-24 lg:gap-32 justify-center my-10 md:my-16 lg:my-24">
        <Button className="text-md p-6 lg:p-12">
          <Link href="/about">Learn more about us</Link>
        </Button>
        <Button className="text-md p-6 lg:p-12 hover:bg-purple-500">
          <Link href="/join">Enquire now</Link>
        </Button>
      </section>
    </>
  );
}
