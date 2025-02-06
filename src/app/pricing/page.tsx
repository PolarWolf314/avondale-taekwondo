import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PaymentCardContent from "@/components/ui/PaymentCardContent";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex-grow">
      <div className="p-6 flex flex-col place-items-center gap-4">
        <h1 className="font-header font-bold text-3xl tracking-tighter text-center">
          Pricing and FAQ
        </h1>
        <p>
          From first-time students to experienced black belts, Avondale
          Taekwon-Do has got you covered.
        </p>
      </div>
      <div>
        <Card className="rounded-none mx-6">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Casual</CardTitle>
            <CardDescription className="text-md">
              The perfect start to your Taekwon-Do journey. No strings attached.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex flex-row place-items-center gap-1 mb-6">
              $20{" "}
              <span className="text-sm text-muted-foreground">/ session</span>
            </div>
            <PaymentCardContent
              perks={[
                "Pay-as-you-go flexibility",
                "No commitment required",
                "Access to all regular classes",
                "Ideal for drop-in training",
              ]}
            />
          </CardContent>
          <CardFooter>
            <Button>
              <Link href="/join">Enquire Now</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="rounded-none mx-6">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Child/Student</CardTitle>
            <CardDescription className="text-md">
              Affordable training for students looking to progress and grow in
              Taekwon-Do.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex flex-row place-items-center gap-1 mb-6">
              $70 <span className="text-sm text-muted-foreground">/ month</span>
            </div>
            <PaymentCardContent
              perks={[
                "Discounted rate for students",
                "Unlimited regular classes per month",
                "Structured progression with grading opportunities",
                "Personalised training tips from instructors",
              ]}
            />
          </CardContent>
          <CardFooter>
            <Button>
              <Link href="/join">Enquire Now</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="rounded-none mx-6">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Adult</CardTitle>
            <CardDescription className="text-md">
              For dedicated practitioners seeking unlimited training and
              structured advancement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex flex-row place-items-center gap-1 mb-6">
              $80 <span className="text-sm text-muted-foreground">/ month</span>
            </div>
            <PaymentCardContent
              perks={[
                "Unlimited regular classes per month",
                "Structured progression with grading opportunities",
                "Personalised training tips from instructors",
              ]}
            />
          </CardContent>
          <CardFooter>
            <Button>
              <Link href="/join">Enquire Now</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="rounded-none mx-6">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Family</CardTitle>
            <CardDescription className="text-md">
              Train together as a family and enjoy the best value for group
              memberships.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex flex-row place-items-center gap-1 mb-6">
              $80{" "}
              <span className="text-sm text-muted-foreground">/ month +</span>{" "}
              $25
              <span className="text-sm text-muted-foreground">
                / extra person
              </span>
            </div>
            <PaymentCardContent
              perks={[
                "Best value for families",
                "Unlimited regular classes for the whole family",
                "Sibling/parent-child training opportunities",
                "Family discounts on grading fees",
                "Capped at $155/month",
              ]}
            />
          </CardContent>
          <CardFooter>
            <Button>
              <Link href="/join">Enquire Now</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
