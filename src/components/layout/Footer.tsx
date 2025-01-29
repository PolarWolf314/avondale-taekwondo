import { Facebook } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      THIS IS THE FOOTER
      <div>Logo, contact details, and address</div>
      <div>
        Links for the page. That is, home, about us, pricing and FAQ, and
        contact us
      </div>
      <div>
        Links to itkd stuff. That is, the main website, members page, and events
        page, and any other resources such as a digital copy of the handbook
      </div>
      <div>
        Legal and policy. Privacy policy (we do not track anything), link to
        itkd terms and conditions, and write up a code of conduct page with the
        instructors code of conduct + tenents of tkd
      </div>
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
