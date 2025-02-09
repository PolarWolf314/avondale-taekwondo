import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PaymentCard from "@/components/ui/PaymentCard";

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
      <div className="flex flex-col xl:grid xl:grid-cols-2 md:mx-8 xl:mx-16">
        <div className="md:grid md:grid-cols-2 xl:place-self-end">
          <PaymentCard
            perks={[
              "Pay-as-you-go flexibility",
              "No commitment required",
              "Access to all regular classes",
              "Ideal for drop-in training",
            ]}
            title="Casual"
            description="The perfect start to your Taekwon-Do journey. No strings
                attached."
            price={20}
            isMonthly={false}
            isFamily={false}
            isMostPopular={false}
            className="md:place-self-end"
          />
          <PaymentCard
            perks={[
              "Discounted rate for children and students",
              "Unlimited regular classes per month",
              "Structured progression with grading opportunities",
              "Personalised training tips from instructors",
            ]}
            title="Child/Student"
            description="Affordable training for children and students looking to grow in Taekwon-Do."
            price={70}
            isMonthly={true}
            isFamily={false}
            isMostPopular={false}
          />
        </div>
        <div className="md:grid md:grid-cols-2 xl:place-self-start">
          <PaymentCard
            perks={[
              "Unlimited regular classes per month",
              "Structured progression with grading opportunities",
              "Personalised training tips from instructors",
            ]}
            title="Adult"
            description="For dedicated practitioners seeking unlimited training and structured advancement."
            price={80}
            isMonthly={true}
            isFamily={false}
            isMostPopular={true}
            className="md:place-self-end"
          />
          <PaymentCard
            perks={[
              "Best value for families",
              "Unlimited regular classes for the whole family",
              "Sibling/parent-child training opportunities",
              "Family discounts on grading fees",
              "Capped at $155/month",
            ]}
            title="Family"
            description="Train together as a family and enjoy the best value for group memberships."
            price={80}
            isMonthly={true}
            isFamily={true}
            isMostPopular={false}
          />
        </div>
      </div>
      <section className="w-full grid grid-cols-1 justify-items-center p-6 mb-6">
        <div className="lg:w-[40rem]">
          <h2 className="font-header text-2xl font-bold tracking-tighter mb-2">
            General Questions
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>
                What is International Taekwon-Do (ITF)?
              </AccordionTrigger>
              <AccordionContent>
                ITF (International Taekwon-Do Federation) is a traditional
                martial art focused on self-defense, discipline, and technical
                precision. Our club follows the ITF syllabus, including
                patterns, sparring, and breaking techniques.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>
                How long does it take to get my black belt?
              </AccordionTrigger>
              <AccordionContent>
                On average it takes a dedicated student 6-8 years to achieve
                their Black Belt. It is possible to do this more quickly;
                however we recommend that you take your time and fully
                understand the art that you are learning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>
                Do I need prior experience to join?
              </AccordionTrigger>
              <AccordionContent>
                No, beginners are always welcome! Our classes cater to all skill
                levels, from complete beginners to experienced martial artists.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <h2 className="font-header text-2xl font-bold tracking-tighter mt-8 mb-2">
            Training and Membership
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>How often should I train?</AccordionTrigger>
              <AccordionContent>
                We offer two training sessions per week. We recommend that you
                come to every session for steady progress, but you should train
                as often as your schedule allows. As you rank up, we expect you
                to be doing extra trainings outside of classes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>
                What should I wear to my first class?
              </AccordionTrigger>
              <AccordionContent>
                Comfortable sportswear is fine for your first few sessions. Once
                you decide to commit to training, you’ll need an ITF-approved
                dobok (uniform). Remember to bring water.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>How does grading work?</AccordionTrigger>
              <AccordionContent>
                Grading is held every few months and tests your progress through
                patterns, sparring, step-sparring, self-defense, and theory.
                Each successful grading brings you closer to earning your black
                belt.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <h2 className="font-header text-2xl font-bold tracking-tighter mt-8 mb-2">
            Competitions and Family Training
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>
                Does your club participate in competitions?
              </AccordionTrigger>
              <AccordionContent>
                Yes! We encourage students to compete in local, national, and
                even international ITF tournaments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Can families train together?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We offer a family-friendly membership, making it
                easier for parents and kids to train together.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>Is there an age limit?</AccordionTrigger>
              <AccordionContent>
                There is not an explicit age limit. We are one of the few clubs
                in NZ that continues to train adults and children together in
                the same class. However because of this, children need to show
                some basic levels of maturity. There is no upper age limit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </section>
  );
}
