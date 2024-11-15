import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown} from "lucide-react";

export const CardTransaction = ({ name, price, symbole, type }) => {
  if (type === "entrée") {
    return (
      <Card className="h-fit">
        <CardContent className="pt-6 flex justify-between">
          <ArrowUp style={{ color: "green" }} />
          <div className="flex gap-4">
            <h3>{name}</h3>
            <p style={{ color: "green" }}>
              {price} {symbole}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  } else if (type === "sortie") {
    return (
      <Card className="h-fit">
        <CardContent className="pt-6 flex justify-between">
          <ArrowDown style={{ color: "red" }} />
          <div className="flex gap-4">
            <h3>{name}</h3>
            <p style={{ color: "red" }}>
              {price} {symbole}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    <p>error</p>
  }
};