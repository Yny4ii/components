"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/components/Chart";

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

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

const CustomChart = ({
  chartConfig,
  chartData,
  areaDataKey,
  axisDataKey,
}: CustomChartProps) => {
  const { width } = useScreenSize();
  const getResponsiveSettings = () => {
    if (width < 640) {
      return {
        fontSize: 12,
        interval: Math.max(0, Math.floor(chartData.length / 3) - 1),
        tickMargin: 6,
        adjustment: 30,
      };
    } else if (width < 768) {
      return {
        fontSize: 14,
        interval: Math.max(0, Math.floor(chartData.length / 4) - 1),
        tickMargin: 7,
        adjustment: 35,
      };
    } else if (width < 1024) {
      return {
        fontSize: 16,
        interval: Math.max(0, Math.floor(chartData.length / 6) - 1),
        tickMargin: 8,
        adjustment: 40,
      };
    } else {
      return {
        fontSize: 18,
        interval: 0,
        tickMargin: 8,
        adjustment: 45,
      };
    }
  };

  const settings = getResponsiveSettings();

  return (
    <div className="w-full border border-accent rounded-2xl px-4 pt-2 pb-2 shadow-secondary-shadow">
      <div className="overflow-visible" style={{ margin: "0 -16px" }}>
        <ChartContainer
          config={chartConfig}
          className="h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] w-full"
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
              tickMargin={settings.tickMargin}
              interval={settings.interval}
              tick={(props: TickProps): ReactElement<SVGElement> => {
                const { x, y, payload, index } = props;

                const isFirst = index === 0;
                const isLast = index === chartData.length - 1;
                const adjustedX = isFirst
                  ? x + settings.adjustment
                  : isLast
                  ? x - settings.adjustment
                  : x;

                return (
                  <g transform={`translate(${adjustedX},${y})`}>
                    <text
                      x={0}
                      y={0}
                      dy={12}
                      textAnchor="middle"
                      fill="#6e6e6e"
                      fontSize={settings.fontSize}
                      className="select-none"
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
