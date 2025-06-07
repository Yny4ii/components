import Select, { SelectOption } from "@/app/components/Select";
import CustomChart, { CustomChartProps } from "@/app/components/CustomChart";
import Wrapper from "@/app/components/Wrapper";
import React from "react";

interface ChartBlockProps extends CustomChartProps {
  title: string;
  options: SelectOption[];
  onChange: (option: SelectOption) => void;
  currentOption: SelectOption;
}

const ChartBlock = ({
  chartConfig,
  chartData,
  areaDataKey,
  axisDataKey,
  options,
  title,
  currentOption,
  onChange,
}: ChartBlockProps) => {
  return (
    <Wrapper>
      <div className="flex items-center justify-between mb-5 ">
        <h3 className="text-xl sm:text-4xl font-bold text-light-gray">
          {title}
        </h3>
        <Select
          options={options}
          currentOption={currentOption}
          onChange={onChange}
        />
      </div>
      <CustomChart
        chartConfig={chartConfig}
        chartData={chartData}
        areaDataKey={areaDataKey}
        axisDataKey={axisDataKey}
      />
    </Wrapper>
  );
};

export default ChartBlock;
