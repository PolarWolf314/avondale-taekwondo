import React from "react";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PaymentCardProps {
  perks: string[];
  title: string;
  description: string;
  price: number;
  isMonthly: boolean;
  isFamily: boolean;
  isMostPopular: boolean;
  className?: string;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  perks,
  title,
  description,
  price,
  isMonthly,
  isFamily,
  isMostPopular,
  className,
}) => {
  const paymentCardPerks = perks.map((perk, index) => (
    <li key={index}>
      <div className="flex flex-row gap-2 pb-1">
        <Check className="text-green-500 flex-shrink-0" />
        <span>{perk}</span>
      </div>
    </li>
  ));

  let priceComponent = (
    <div className="text-4xl font-bold flex flex-row place-items-center gap-1 mb-6">
      ${price} <span className="text-xs text-muted-foreground">/ session</span>
    </div>
  );
  if (isMonthly) {
    priceComponent = (
      <div className="text-4xl font-bold flex flex-row place-items-center gap-1 mb-6">
        ${price} <span className="text-xs text-muted-foreground">/ month</span>
      </div>
    );
  }

  if (isMonthly && isFamily) {
    priceComponent = (
      <div className="text-4xl font-bold flex flex-row place-items-center gap-1 mb-6">
        ${price}{" "}
        <span className="text-xs text-muted-foreground">/ month +</span> $25
        <span className="text-xs text-muted-foreground">/ extra person</span>
      </div>
    );
  }

  return (
    <Card
      className={cn(
        "rounded-none mx-6 md:mx-0 relative grid md:grid-rows-4 md:h-[30rem] xl:h-[32rem] md:max-w-md md:place-content-center",
        isMostPopular ? "border-purple-300 border-2" : "",
        className,
      )}
    >
      <CardHeader>
        <div
          className={`${isMostPopular ? "flex flex-row justify-between" : null}`}
        >
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <Badge
            className={`${isMostPopular ? "bg-purple-500 hover:bg-purple-400 text-xs" : "hidden"}`}
          >
            Most Popular!
          </Badge>
        </div>
        <CardDescription className="text-md pt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="py-4">{priceComponent}</div>
        <ul>{paymentCardPerks}</ul>
      </CardContent>
      <CardFooter className="md:absolute md:bottom-0">
        <Button>
          <Link href="/join">Book your 2-week free trial</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentCard;
