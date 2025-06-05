import { ColumnConfig, DataConfig } from "@/app/components/Table";

export const columns: ColumnConfig[] = [
  {
    key: "asset",
    label: "Assets",
    type: "image-text",
  },
  {
    key: "chain",
    label: "Chain",
    type: "image",
  },
  {
    key: "apy",
    label: "APY",
    tooltip: "lorem lorem lorem lorem",
    type: "text",
  },
  {
    key: "tvl",
    label: "TVL",
    tooltip: "lorem lorem lorem lorem",
    type: "text",
  },
  {
    key: "incentive",
    label: "Incentive",
    tooltip: "lorem lorem lorem",
  },
];

export const data: DataConfig[] = [
  {
    chain:
      "https://app.stablejack.xyz/_next/static/media/savax-by-benqi.e373b019.svg",
    incentive: "123",
    tvl: "123",
    asset: {
      assetName: "SAVAX Token",
      imageSrc:
        "https://app.stablejack.xyz/_next/static/media/savax-by-benqi.e373b019.svg",
    },
    apy: "12.5%",
    fixedYield: true,
  },
];
