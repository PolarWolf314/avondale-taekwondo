/**
 * A section of links in the footer.
 *
 * @param title (string): The title of the section
 * @param links (array): An array of objects with a name and url property
 *
 * This component is a section of links in the footer. It takes a title and an array of links
 * and renders them in a column. This component is used in the footer to display links to
 * different sections of the website.
 */

import Link from "next/link";

interface Link {
  name: string;
  url: string;
}

interface FooterLinksProps {
  title: string;
  links: Link[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  /**
   * Maps over the links array and renders each link as a nextjs Link.
   */
  const renderedLinks = links.map((link, index) => (
    <Link key={index} href={link.url} className="text-sm">
      {link.name}
    </Link>
  ));
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-display text-xl pb-4">{title}</h3>
      <>{renderedLinks}</>
    </div>
  );
};

export default FooterLinks;
