import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CodeOfConduct() {
  return (
    <div className="flex-grow bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-header font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-gray-900 mb-4">
              Code of Conduct
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our principles guide us in creating a respectful, disciplined, and
              supportive training environment where everyone can grow through
              the art of Taekwon-Do.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="space-y-8">
          {/* Philosophy Banner */}
          <Card className="border-0 shadow-sm bg-purple-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-header font-bold text-xl tracking-tighter text-purple-800 mb-4">
                  The Art of Kicking and Punching
                </h3>
                <p className="text-purple-700 text-lg leading-relaxed">
                  &ldquo;When you put on the dobok, you become a student of
                  Taekwon-Do. Regardless of age, background, or experience, we
                  are all united in our journey of self-improvement through
                  discipline, respect, and hard work.&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>

          {/* ITF Foundation */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header text-xl font-bold tracking-tighter">
                Foundation in ITF Principles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Our code of conduct is built upon the International Taekwon-Do
                Federation (ITF) Instructor&apos;s Code of Conduct, adapted for
                our dojang community. These time-tested principles ensure we
                maintain the highest standards of martial arts practice and
                character development.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Reference:</strong>{" "}
                  <a
                    href="https://members.itkd.co.nz/reference/documents/policy/ITF%20Instructors%20CODE%20of%20CONDUCT.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    ITF Instructors Code of Conduct
                  </a>{" "}
                  - International Taekwon-Do Federation
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Five Tenets */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header text-xl font-bold tracking-tighter">
                The Five Tenets of Taekwon-Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                These fundamental principles guide all our actions and
                interactions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    예의 (Ye Ui)
                  </h4>
                  <p className="text-sm text-purple-700 font-medium mb-1">
                    Courtesy
                  </p>
                  <p className="text-xs text-purple-600">
                    Showing respect and politeness to all
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    염치 (Yom Chi)
                  </h4>
                  <p className="text-sm text-purple-700 font-medium mb-1">
                    Integrity
                  </p>
                  <p className="text-xs text-purple-600">
                    Being honest and having strong moral principles
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    인내 (In Nae)
                  </h4>
                  <p className="text-sm text-purple-700 font-medium mb-1">
                    Perseverance
                  </p>
                  <p className="text-xs text-purple-600">
                    Continuing despite difficulties
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    극기 (Guk Gi)
                  </h4>
                  <p className="text-sm text-purple-700 font-medium mb-1">
                    Self-Control
                  </p>
                  <p className="text-xs text-purple-600">
                    Mastering your emotions and actions
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg md:col-span-2 lg:col-span-1">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    백절불굴 (Baek Jol Bool Gool)
                  </h4>
                  <p className="text-sm text-purple-700 font-medium mb-1">
                    Indomitable Spirit
                  </p>
                  <p className="text-xs text-purple-600">
                    Unconquerable determination
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Respect and Equality */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header text-xl font-bold tracking-tighter">
                Respect and Equality in the Dojang
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Universal Student Status
                </h4>
                <p className="text-gray-700">
                  When you wear the dobok (uniform), you become a student of
                  Taekwon-Do. This sacred garment represents our shared
                  commitment to learning, regardless of age, gender, background,
                  or experience level. In the dojang, we are all equal students
                  on the path of martial arts.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Mutual Respect
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    Treat all students, instructors, and visitors with courtesy
                    and respect
                  </li>
                  <li>Bow when entering and leaving the training area</li>
                  <li>Address instructors and senior students appropriately</li>
                  <li>Listen attentively when instruction is being given</li>
                  <li>
                    Support and encourage fellow students in their journey
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Training Standards */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header text-xl font-bold tracking-tighter">
                Training Standards and Discipline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Personal Conduct
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Arrive on time and prepared for training</li>
                  <li>
                    Maintain personal hygiene and clean, properly fitted dobok
                  </li>
                  <li>Keep fingernails and toenails short for safety</li>
                  <li>Remove jewelry and secure long hair before training</li>
                  <li>Inform instructors of any injuries or health concerns</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Technical Standards
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    Execute techniques with proper form and control as
                    demonstrated
                  </li>
                  <li>
                    Maintain correct stances with appropriate weight
                    distribution
                  </li>
                  <li>
                    Practice breathing techniques and timing as instructed
                  </li>
                  <li>Focus on accuracy and precision over speed and power</li>
                  <li>
                    Follow the systematic progression of techniques as outlined
                    in curriculum
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Training Etiquette
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Bow when entering and leaving the training area</li>
                  <li>
                    Listen attentively during instruction and ask questions
                    respectfully
                  </li>
                  <li>
                    Practice with appropriate intensity for your partner&apos;s
                    skill level
                  </li>
                  <li>Help maintain a clean and safe training environment</li>
                  <li>
                    Support fellow students and create a positive learning
                    atmosphere
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Self-Improvement Philosophy */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header text-xl font-bold tracking-tighter">
                The Path of Self-Improvement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Eastern Martial Arts Philosophy
                </h4>
                <p className="text-gray-700 mb-3">
                  Taekwon-Do is more than physical techniques—it is a way of
                  life that cultivates character, discipline, and wisdom.
                  Through dedicated practice and hard work, we develop not only
                  our bodies but our minds and spirits.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Continuous Growth
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    <strong>Embrace challenges</strong> as opportunities to grow
                    stronger
                  </li>
                  <li>
                    <strong>Learn from mistakes</strong> without fear of failure
                  </li>
                  <li>
                    <strong>Set personal goals</strong> and work diligently to
                    achieve them
                  </li>
                  <li>
                    <strong>Develop patience</strong> with your own progress and
                    that of others
                  </li>
                  <li>
                    <strong>Cultivate humility</strong> in victory and grace in
                    defeat
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Remember:</strong> The black belt is not the
                  destination—it is the beginning of true learning. Every day in
                  the dojang is an opportunity to become a better version of
                  yourself.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Safety and Responsibility */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header text-xl font-bold tracking-tighter">
                Safety and Responsibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Physical Safety
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    Practice techniques with appropriate control for your
                    partner&apos;s skill level
                  </li>
                  <li>
                    Stop immediately if someone calls &ldquo;stop&rdquo; or
                    appears injured
                  </li>
                  <li>
                    Report any unsafe conditions or equipment to instructors
                  </li>
                  <li>
                    Follow all safety guidelines for sparring and partner
                    exercises
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Emotional Safety
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    Create an inclusive environment where everyone feels welcome
                  </li>
                  <li>Offer constructive feedback and encouragement</li>
                  <li>Respect different learning speeds and abilities</li>
                  <li>
                    Address conflicts respectfully and seek instructor guidance
                    when needed
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Outside the Dojo */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header text-xl font-bold tracking-tighter">
                Representing Taekwon-Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                As students of Taekwon-Do, we carry the responsibility of
                representing our art and school with honor both inside and
                outside the dojang:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  Use Taekwon-Do skills only for self-defense and the protection
                  of others
                </li>
                <li>Demonstrate the five tenets in daily life</li>
                <li>
                  Be a positive ambassador for martial arts in the community
                </li>
                <li>
                  Continue learning and growing as a martial artist and person
                </li>
                <li>
                  Share knowledge respectfully and encourage others to train
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Consequences */}
          <Card className="border-0 shadow-sm bg-yellow-50">
            <CardHeader>
              <CardTitle className="font-header text-xl font-bold tracking-tighter">
                Upholding Our Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Failure to uphold this code of conduct may result in:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Discussion with instructors about expectations</li>
                <li>Temporary suspension from training</li>
                <li>Removal from the school in serious cases</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Our goal is always education and improvement. We work with
                students to help them understand and embody these principles.
              </p>
            </CardContent>
          </Card>

          {/* Commitment */}
          <Card className="border-0 shadow-sm bg-purple-50">
            <CardHeader>
              <CardTitle className="font-header text-xl font-bold tracking-tighter">
                Our Commitment to You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700">
                We pledge to provide a safe, respectful, and supportive
                environment where you can pursue your martial arts journey. We
                will treat every student with dignity, provide quality
                instruction, and help you develop not just as a martial artist,
                but as a person of character and integrity.
              </p>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>
              This code of conduct was last updated on{" "}
              {new Date().toLocaleDateString("en-NZ", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
