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
        <button className="p-2 hover:bg-gray-300 rounded-md transition-colors flex items-center justify-center">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center pt-10">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="gap-4 pt-10 flex flex-col items-center">
          <SheetClose asChild>
            <Link href="/" prefetch={true} className="w-full flex justify-center">
              <Button variant="link" className="w-full">Home</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about" prefetch={true} className="w-full flex justify-center">
              <Button variant="link" className="w-full">About</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/pricing" prefetch={true} className="w-full flex justify-center">
              <Button variant="link" className="w-full">Pricing and FAQ</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/join" prefetch={true} className="w-full flex justify-center">
              <Button className="w-full max-w-xs">Enquire</Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
