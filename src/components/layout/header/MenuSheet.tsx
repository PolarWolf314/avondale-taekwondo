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

const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-display font-bold tracking-tight text-xl pt-8">
            Avondale Taekwon-Do
          </SheetTitle>
        </SheetHeader>
        <SheetFooter className="gap-4 pt-10">
          <SheetClose asChild>
            <Button className="mx-24">
              <a href="/join">Join</a>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="link">
              <a href="/pricing">Pricing and FAQ</a>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="link">
              <a href="/about">About</a>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="link">
              <a href="/">Home</a>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
