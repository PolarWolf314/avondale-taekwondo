import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ExpandedLinks = () => {
  return (
    <ul className="flex flex-row md:gap-3">
      <li>
        <Button variant="link" asChild>
          <Link href="/" prefetch={true}>Home</Link>
        </Button>
      </li>
      <li>
        <Button variant="link" asChild>
          <Link href="/about" prefetch={true}>About</Link>
        </Button>
      </li>
      <li>
        <Button variant="link" asChild>
          <Link href="/pricing" prefetch={true}>Pricing & FAQ</Link>
        </Button>
      </li>
      <li>
        <Button asChild>
          <Link href="/join" prefetch={true}>Enquire</Link>
        </Button>
      </li>
    </ul>
  );
};
export default ExpandedLinks;
