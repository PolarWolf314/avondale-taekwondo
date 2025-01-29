import { Facebook } from "lucide-react";
import React from "react";
import FooterLinks from "./footer/FooterLinks";

const Footer = () => {
  return (
    <footer>
      THIS IS THE FOOTER
      <div>Logo, contact details, and address</div>
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
