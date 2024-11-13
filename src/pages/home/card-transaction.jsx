import { Card, CardContent } from "@/components/ui/card";
import { PrinterIcon } from "lucide-react";

export const CardTransaction = ({ name, price, symbole }) => {
  return (
    <Card className="h-fit">
      <CardContent className="pt-6 flex justify-between">
        <PrinterIcon />
        <div className="flex gap-4">
          <h3>{name}</h3>
          <p>
            {price} {symbole}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
