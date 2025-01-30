import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center pt-10">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <SheetFooter className="gap-4 pt-10">
          <SheetClose asChild>
            <Button asChild className="mx-24">
              <Link href="/join">Enquire</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild variant="link">
              <Link href="/pricing">Pricing and FAQ</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild variant="link">
              <Link href="/about">About</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild variant="link">
              <Link href="/">Home</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
