import React from "react";
import TooltipIcon from "@/app/icons/TooltipIcon";
import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import { Tooltip } from "@/app/components/Tooltip";

export interface DataConfig {
  asset: {
    imageSrc: string;
    assetName: string;
  };
  chain: string;
  apy: string;
  tvl: string;
  incentive: string;
  fixedYield?: boolean;

  [key: string]: any;
}

export interface ColumnConfig {
  key: string;
  label: string;
  tooltip?: string;
  type?: "text" | "image" | "image-text";
  imageProps?: {
    src: string;
  };
  imageTextProps?: {
    src: string;
    text: string;
  };
}

interface TableProps {
  title?: string;
  subtitle?: string;
  columns: ColumnConfig[];
  data: DataConfig[];
  className?: string;
}

const ImageTextCell = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="flex items-center gap-5 justify-center">
      <Image
        className="rounded-full"
        width={50}
        height={50}
        src={src}
        alt={text}
      />
      <span className="font-bold text-3xl">{text}</span>
    </div>
  );
};

const ImageCell = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="rounded-full"
        width={50}
        height={50}
        src={src}
        alt={alt}
      />
    </div>
  );
};

const Table = ({ title, subtitle, columns, data }: TableProps) => {
  return (
    <Wrapper>
      <div className="text-light-gray ">
        {title && (
          <div className="flex items-center mb-5">
            <span className="text-4xl font-bold ">{title}</span>
            <span className="font-normal text-2xl">{subtitle}</span>
          </div>
        )}

        <div className={"overflow-x-auto"}>
          <table className="w-full border-spacing-y-1.5 border-separate">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-15 py-4 font-bold text-2xl"
                  >
                    <div className="flex items-center gap-2 justify-center">
                      <span>{column.label}</span>
                      {column.tooltip && (
                        <Tooltip text={column.tooltip}>
                          <TooltipIcon />
                        </Tooltip>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="relative group cursor-pointer group">
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`${
                        row.fixedYield
                          ? " group-hover:bg-accent first:overflow-hidden first:before:content-['FIXED_YIELD'] first:before:absolute first:before:-left-9 first:before:top-8 first:before:-translate-y-1/2 first:before:-rotate-49 first:before:py-1.5 first:before:px-8 first:before:text-xs first:before:font-medium first:before:bg-[#257de2] first:before:text-main-white  first:before:whitespace-nowrap"
                          : ""
                      } shadow-main-shadow first:rounded-l-lg last:rounded-r-lg px-15 py-4 bg-main-white whitespace-nowrap text-center relative transition-colors duration-300  `}
                    >
                      {column.type === "image" && (
                        <ImageCell
                          src={row[column.key]}
                          alt={`${column.label} ${index + 1}`}
                        />
                      )}
                      {column.type === "image-text" && (
                        <ImageTextCell
                          src={row[column.key]?.imageSrc || row[column.key]}
                          text={
                            row[column.key]?.assetName ||
                            (row[column.key] as string)
                          }
                        />
                      )}
                      {(!column.type || column.type === "text") && (
                        <span>{row[column.key] || "-"}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data.length === 0 && (
          <div className="px-6 py-8 text-center text-gray-500">Nothing :(</div>
        )}
      </div>
    </Wrapper>
  );
};

export default Table;
