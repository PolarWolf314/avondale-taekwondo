import { Facebook } from "lucide-react";
import React from "react";
import FooterLinks from "./footer/FooterLinks";
import Logo from "./header/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-6 my-8">
      <section className="flex flex-col gap-4">
        <Logo />
        <p>instructor@avondaletkd.co.nz</p>
        <p>+64 21 164 6158</p>
        <Link href="https://maps.app.goo.gl/yD6BswpVuXgaqF2w7">
          Avondale Primary School
          <br />
          Crayford Street West, Avondale
          <br />
          Auckland 1026, NZ
        </Link>
      </section>
      <FooterLinks
        title="Club"
        links={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
          { name: "Pricing and FAQ", url: "/pricing" },
          { name: "Contact Us", url: "/join" },
        ]}
      />
      <FooterLinks
        title="International TKD"
        links={[
          { name: "Members", url: "https://members.itkd.co.nz/" },
          { name: "News", url: "https://members.itkd.co.nz/news/" },
          { name: "Events", url: "https://members.itkd.co.nz/events/" },
          {
            name: "Handbook",
            url: "https://tigertkd.co.nz/wp-content/uploads/2020/06/Technqiues-Handbook-2017.pdf",
          },
        ]}
      />
      <FooterLinks
        title="Legal and Policy"
        links={[
          { name: "Privacy Policy", url: "/privacy-policy" },
          {
            name: "Terms and Conditions",
            url: "https://members.itkd.co.nz/terms.php",
          },
          {
            name: "Code of Conduct",
            url: "code-of-conduct",
          },
        ]}
      />
      <hr />
      <div>
        &copy; Avondale Taekwon-Do {new Date().getFullYear()}. All rights
        reserved. Designed and created by Aaron Guo. Check out my GitHub for
        more of my work!
      </div>
      <Facebook />
    </footer>
  );
};

export default Footer;
