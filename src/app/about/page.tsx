import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section>
      <h1>Who are we?</h1>
      <p>
        We are a local school of Taekwon-Do based in Avondale, Auckland. We are
        affiliated with the{" "}
        <span>
          <Link className="underline" href="https://members.itkd.co.nz">
            International Taekwon-Do Foundation of New Zealand
          </Link>
        </span>
        . We offer our expertise on teaching you the art of Taekwon-Do. Having
        done so for the past {new Date().getFullYear() - 2004} years, we believe
        that we have the best instructors, enabling you to become the best
        version of yourself. But don&apos;t just take our word for it.{" "}
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
      <p className="italic">
        The first New Zealander under 18 World Champion in Sparring is from
        Avondale Taekwon-Do.
      </p>
      <h1>Who do we teach?</h1>
      <p>
        We firmly believe that everybody should give Taekwon-Do a go. Our head
        instructor is Robert Ireland — II Dan. Mr. Ireland believes that
        everybody has something to offer in the class, no matter your age,
        gender, disability, ethnic origin, religion, or sexual orientation. When
        you put on your 도복 (dobok, or uniform), you become a student of
        Taekwon-Do, and a member of our{" "}
        <span className="italic">community</span>.
      </p>
      <Button>Book your free trial now</Button>
    </section>
  );
}
