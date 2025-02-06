import React from "react";
import { Check } from "lucide-react";

interface PaymentCardContentProps {
  perks: string[];
}

const PaymentCardContent: React.FC<PaymentCardContentProps> = ({ perks }) => {
  return (
    <ul className="space-y-2">
      {perks.map((perk, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className="text-green-500" />
          <span>{perk}</span>
        </li>
      ))}
    </ul>
  );
};

export default PaymentCardContent;
