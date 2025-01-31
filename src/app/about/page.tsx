import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <section className="max-w-2xl lg:max-w-3xl">
        <div className="p-12 pb-0 flex flex-col gap-10">
          <h1 className="font-header font-bold text-3xl tracking-tighter">
            Who are we?
          </h1>
          <p>
            We are a local school of Taekwon-Do based in Avondale, Auckland, and
            we are affiliated with the{" "}
            <span>
              <Link className="underline" href="https://members.itkd.co.nz">
                International Taekwon-Do Foundation of New Zealand
              </Link>
            </span>
            . We offer our expertise on teaching you the art of Taekwon-Do.
            <br />
            <br />
            Having taught for the past {new Date().getFullYear() - 2004} years,
            we believe that we have the best instructors, enabling you to become
            the best version of yourself. But don&apos;t just take our word for
            it.{" "}
            <span>
              <Link
                className="underline"
                href="https://tearaway.co.nz/talent-taekwondo-bianca-koper/"
              >
                The first New Zealander to come home with the under 18 World
                Champion in Sparring title
              </Link>{" "}
              is from <span className="italic">our</span> club.
            </span>
          </p>
          <Alert className="px-8 py-4">
            <Trophy />
            <AlertTitle className="font-bold pb-2">
              Did you catch that?
            </AlertTitle>
            <AlertDescription className="italic">
              The first New Zealander under 18 World Champion in Sparring is
              from Avondale Taekwon-Do.
            </AlertDescription>
          </Alert>
        </div>
        <div className="p-12 flex flex-col gap-10">
          <h1 className="font-header font-bold text-3xl tracking-tighter">
            Who do we teach?
          </h1>
          <p>
            We firmly believe that everybody should give Taekwon-Do a go. Our
            head instructor is Robert Ireland — II Dan. Mr. Ireland believes
            that everybody has something to offer in the class, no matter your
            age, gender, disability, ethnic origin, religion, or sexual
            orientation. When you put on your 도복 (dobok, or uniform), you
            become a student of Taekwon-Do, and a member of our{" "}
            <span className="italic">community</span>.
          </p>
          <Button className="mb-2">
            <Link href="/join">Book your free trial now</Link>
          </Button>
        </div>
      </section>
      <div className="relative hidden lg:block">
        <Image
          src="/assets/double_front_snap_2.jpg"
          fill
          alt="Images of Avondale Taekwon-Do in action"
          className="object-cover"
        />
      </div>
    </div>
  );
}
