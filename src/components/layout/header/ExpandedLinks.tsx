import { Button } from "@/components/ui/button";
import React from "react";

const ExpandedLinks = () => {
  return (
    <ul className="flex flex-row gap-0.5 md:gap-3">
      <li>
        <Button variant="link">
          <a href="/">Home</a>
        </Button>
      </li>
      <li>
        <Button variant="link">
          <a href="/about">About</a>
        </Button>
      </li>
      <li>
        <Button variant="link">
          <a href="/pricing">Pricing and FAQ</a>
        </Button>
      </li>
      <li>
        <Button>
          <a href="/join">Join</a>
        </Button>
      </li>
    </ul>
  );
};
export default ExpandedLinks;
