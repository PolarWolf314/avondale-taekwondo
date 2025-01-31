import { Facebook } from "lucide-react";
import React from "react";
import FooterLinks from "./footer/FooterLinks";
import Logo from "./header/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 lg:px-24 py-8 bg-gray-200">
      <section className="flex flex-col md:flex-row md:justify-between md:pb-4">
        <section className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm">instructor@avondaletkd.co.nz</p>
          <p className="text-sm">+64 21 164 6158</p>
          <Link
            className="text-sm"
            href="https://maps.app.goo.gl/yD6BswpVuXgaqF2w7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avondale Primary School
            <br />
            Crayford Street West, Avondale
            <br />
            Auckland 1026, NZ
          </Link>
          <Link
            className="flex flex-row items-center gap-4"
            href="https://www.facebook.com/AvondaleTKD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-sm font-semibold">Follow us</div>
            <span>
              <Facebook className="h-8 w-8" />
            </span>
          </Link>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 sm:gap-16 md:gap-10 lg:gap-20 xl:gap-24 py-8">
          <FooterLinks
            title="Club"
            links={[
              { name: "Home", url: "/", external: false },
              { name: "About Us", url: "/about", external: false },
              { name: "Pricing and FAQ", url: "/pricing", external: false },
              { name: "Contact Us", url: "/join", external: false },
            ]}
          />
          <FooterLinks
            title="International TKD"
            links={[
              {
                name: "Members",
                url: "https://members.itkd.co.nz/",
                external: true,
              },
              {
                name: "News",
                url: "https://members.itkd.co.nz/news/",
                external: true,
              },
              {
                name: "Events",
                url: "https://members.itkd.co.nz/events/",
                external: true,
              },
              {
                name: "Handbook",
                url: "https://tigertkd.co.nz/wp-content/uploads/2020/06/Technqiues-Handbook-2017.pdf",
                external: true,
              },
            ]}
          />
          <FooterLinks
            title="Legal and Policy"
            links={[
              {
                name: "Privacy Policy",
                url: "/privacy-policy",
                external: false,
              },
              {
                name: "Terms and Conditions",
                url: "https://members.itkd.co.nz/terms.php",
                external: true,
              },
              {
                name: "Code of Conduct",
                url: "code-of-conduct",
                external: false,
              },
            ]}
          />
        </section>
      </section>

      <section className="flex flex-col md:flex-row md:justify-between gap-2 text-gray-700 border-t-2 border-gray-400 pt-6">
        <p className="text-sm">
          &copy; Avondale Taekwon-Do {new Date().getFullYear()}. All rights
          reserved.
        </p>
        <p className="text-sm">
          Designed and created by Aaron Guo ❤️ Check out my{" "}
          <span className="underline">
            <Link href="https://github.com/PolarWolf314">GitHub</Link>
          </span>{" "}
          for more of my work!
        </p>
      </section>
    </footer>
  );
};

export default Footer;
