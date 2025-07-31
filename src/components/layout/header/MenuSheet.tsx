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
        <button className="p-2 hover:bg-gray-300 rounded-md transition-colors">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center pt-10">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <SheetFooter className="gap-4 pt-10">
          <SheetClose asChild>
            <Link href="/join" prefetch={true}>
              <Button className="mx-24">Enquire</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/pricing" prefetch={true}>
              <Button variant="link">Pricing and FAQ</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about" prefetch={true}>
              <Button variant="link">About</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/" prefetch={true}>
              <Button variant="link">Home</Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
