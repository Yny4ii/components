"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/components/Chart";
import type { ReactElement } from "react";

interface TickProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
  index: number;
}

export interface CustomChartProps {
  chartConfig: ChartConfig;
  chartData: any[];
  axisDataKey: string;
  areaDataKey: string;
}
const CustomChart = ({
  chartConfig,
  chartData,
  areaDataKey,
  axisDataKey,
}: CustomChartProps) => {
  return (
    <div className="w-full border border-accent rounded-2xl px-4 pt-2 pb-2 shadow-secondary-shadow">
      <div className="overflow-visible" style={{ margin: "0 -16px" }}>
        <ChartContainer
          config={chartConfig}
          className="h-[250px] w-full"
          style={{ padding: 0 }}
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray={"10 10"}
              stroke={"#e0e0e0"}
            />
            <XAxis
              dataKey={axisDataKey}
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              interval={0}
              tick={(props: TickProps): ReactElement<SVGElement> => {
                const { x, y, payload, index } = props;

                const isFirst = index === 0;
                const isLast = index === chartData.length - 1;
                const adjustedX = isFirst ? x + 45 : isLast ? x - 45 : x;

                return (
                  <g transform={`translate(${adjustedX},${y})`}>
                    <text
                      x={0}
                      y={0}
                      dy={12}
                      textAnchor="middle"
                      fill="#6e6e6e"
                      fontSize={20}
                    >
                      {payload.value.slice(0, 3)}
                    </text>
                  </g>
                ) as ReactElement<SVGElement>;
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey={areaDataKey}
              type="natural"
              fill="#6B2128"
              fillOpacity={"18%"}
              stroke="#6e6e6e"
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default CustomChart;
