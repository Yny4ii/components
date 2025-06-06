import type { ChartConfig } from "@/app/components/Chart";

export const chartData = [
  { month: "January", desktop: 206 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 214 },
  { month: "August", desktop: 40 },
  { month: "September", desktop: 80 },
  { month: "October", desktop: 43 },
  { month: "November", desktop: 256 },
  { month: "December", desktop: 320 },
];

export const chartConfig = {
  desktop: {
    label: "Desktop",
  },
} satisfies ChartConfig;
