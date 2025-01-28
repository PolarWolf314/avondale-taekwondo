import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ExpandedLinks = () => {
  return (
    <ul className="flex flex-row gap-0.5 md:gap-3">
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
          <Link href="/pricing">Pricing and FAQ</Link>
        </Button>
      </li>
      <li>
        <Button>
          <Link href="/join">Join</Link>
        </Button>
      </li>
    </ul>
  );
};
export default ExpandedLinks;
