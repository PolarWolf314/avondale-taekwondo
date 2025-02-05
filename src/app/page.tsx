import { Hero } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-grow">
      <Hero />

      <section className="mt-32 grid flex-col w-screen gap-8 lg:gap-12 px-8 sm:px-16 lg:px-32">
        <Card className="md:w-96 lg:w-[38rem] place-self-start px-3 py-2 rounded-none">
          <CardHeader>
            <CardTitle className="text-lg">
              Come for the Taekwon-Do, stay for the{" "}
              <span className="italic">community</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At Avondale Taekwon-Do, we believe that anybody can become the
              best version of themselves through hard work and determination. We
              are one of the few remaining schools of Taekwon-Do in Aotearoa to
              still stand by having everyone in the family train together.
              <br />
              <br />
              When you put on the uniform, you&apos;re not just a student of
              Taekwon-Do. You&apos;re part of a{" "}
              <span className="italic">community</span>.
            </p>
          </CardContent>
        </Card>
        <Card className="md:w-96 lg:w-[38rem] place-self-end px-3 py-2 rounded-none">
          <CardHeader>
            <CardTitle className="text-lg">
              Self defense in the modern age
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              In today’s world, knowing how to defend yourself is more important
              than ever. At Avondale Taekwon-Do, we teach practical self-defense
              techniques that equip you with the confidence to handle real-life
              situations. Beyond physical skills, we emphasise awareness,
              de-escalation, and mental resilience — helping you stay safe in
              any environment.
            </p>
          </CardContent>
        </Card>
        <Card className="md:w-96 lg:w-[38rem] place-self-start px-3 py-2 rounded-none">
          <CardHeader>
            <CardTitle className="text-lg">
              Courtesy, integrity, perseverance, self-control, indomitable
              spirit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              These five tenets of Taekwon-Do shape not just how we train, but
              how we live. Courtesy teaches us respect for others, integrity
              keeps us honest in our actions, perseverance drives us to push
              through challenges, self-control strengthens our discipline, and
              indomitable spirit empowers us to stand firm in the face of
              adversity. At Avondale Taekwon-Do, we don&apos;t just practice
              martial arts — we build character.
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
    </div>
  );
}
