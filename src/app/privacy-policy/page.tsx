import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="flex-grow bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-header font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your privacy matters to us. Learn how we protect your information
              and respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="space-y-8">
          {/* Privacy Commitment */}
          <Card className="border-0 shadow-sm bg-green-50">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-header tracking-tighter font-bold text-lg text-green-800 mb-2">
                    Privacy-First Approach
                  </h3>
                  <p className="text-green-700">
                    We believe in minimal data collection. We don't use cookies,
                    don't track your browsing, and only collect information when
                    you voluntarily contact us through our enquiry form.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header tracking-tighter text-xl font-bold">
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Contact Form Information
                </h4>
                <p className="text-gray-700 mb-3">
                  When you submit our contact form, we collect only the
                  information you provide:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Phone number (optional)</li>
                  <li>Your message and enquiry details</li>
                  <li>Preferred start date (optional)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  What We Don't Collect
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>
                    <strong>No cookies</strong> - We don't use any tracking
                    cookies
                  </li>
                  <li>
                    <strong>No browsing data</strong> - We don't track your
                    website usage
                  </li>
                  <li>
                    <strong>No personal profiles</strong> - We don't build user
                    profiles
                  </li>
                  <li>
                    <strong>No third-party tracking</strong> - No analytics or
                    advertising trackers
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header tracking-tighter text-xl font-bold">
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We use the information you provide solely to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Respond to your enquiry about our Taekwon-Do classes</li>
                <li>Provide information about our training programs</li>
                <li>Schedule trial sessions or answer questions</li>
                <li>Communicate with you about our services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>We never:</strong> sell, rent, or share your information
                with third parties for marketing purposes.
              </p>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header tracking-tighter text-xl font-bold">
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">
                Our website uses the following privacy-focused services to
                operate:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Netlify</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Website hosting and deployment
                  </p>
                  <p className="text-xs text-gray-600">
                    Netlify may collect anonymous traffic data for performance
                    monitoring. No personal information is shared.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Resend</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Email delivery service
                  </p>
                  <p className="text-xs text-gray-600">
                    Used only to send your enquiry emails to us. No tracking or
                    analytics enabled.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Cloudflare
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Security and performance
                  </p>
                  <p className="text-xs text-gray-600">
                    Provides DDoS protection and caching. Traffic data is
                    anonymized and not linked to individuals.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> All these services operate under
                  their own privacy policies, which emphasize user privacy and
                  data protection. Your browsing remains anonymous according to
                  their respective privacy standards.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header tracking-tighter text-xl font-bold">
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We take the security of your information seriously:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  All form submissions are protected with spam prevention
                  measures
                </li>
                <li>
                  Email communications are sent through secure, encrypted
                  channels
                </li>
                <li>
                  We don't store your information in databases or tracking
                  systems
                </li>
                <li>
                  Contact information is only retained in email communications
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-header tracking-tighter text-xl font-bold">
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Request information about any data we hold about you</li>
                <li>
                  Ask us to delete any emails or communications containing your
                  information
                </li>
                <li>Opt out of future communications at any time</li>
                <li>
                  Contact us with any privacy-related questions or concerns
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 shadow-sm bg-purple-50">
            <CardHeader>
              <CardTitle className="font-header tracking-tighter text-xl font-bold">
                Contact Us About Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or how we
                handle your information, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> instructor@avondaletkd.co.nz
                </p>
                <p>
                  <strong>Phone:</strong> +64 21 164 6158
                </p>
                <p>
                  <strong>Address:</strong> Avondale Primary School, Crayford
                  Street West, Avondale, Auckland 1026, NZ
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>
              This privacy policy was last updated on{" "}
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

