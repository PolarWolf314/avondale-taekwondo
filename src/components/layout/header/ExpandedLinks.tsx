import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ExpandedLinks = () => {
  return (
    <ul className="flex flex-row md:gap-3">
      <li>
        <Button variant="link">
          <Link href="/">Home</Link>
        </Button>
      </li>
      <li>
        <Button variant="link">
          <Link href="/about">About</Link>
        </Button>
      </li>
      <li>
        <Button variant="link">
          <Link href="/pricing">Pricing & FAQ</Link>
        </Button>
      </li>
      <li>
        <Button>
          <Link href="/join">Enquire</Link>
        </Button>
      </li>
    </ul>
  );
};
export default ExpandedLinks;
