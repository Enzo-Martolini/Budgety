import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { HelpCircle } from "lucide-react";

import { ChartContainer } from "@/components/ui/chart";

const chartData = [
  { browser: "safari", visitors: 0, fill: "var(--color-safari)" }, // Barre vide
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
};

export function ChartForm() {
  return (
    <div className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[300px]"
      >
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={250}
          innerRadius={80}
          outerRadius={110}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[86, 74]}
          />
          <RadialBar dataKey="visitors" background cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <foreignObject
                      x={viewBox.cx - 30}
                      y={viewBox.cy - 30}
                      width="60"
                      height="60"
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <HelpCircle className="w-36 h-36 text-muted-foreground" />
                      </div>
                    </foreignObject>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
