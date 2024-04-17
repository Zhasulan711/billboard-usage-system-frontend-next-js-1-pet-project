import { FC } from "react";
import { AnalyticsIcon } from "./AnalyticsIcon";
import { DashboardIcon } from "./DashboardIcon";
import { SearchIcon } from "./SearchIcon";
import { SettingsIcon } from "./SettingsIcon";
import { TransactionIcon } from "./TransactionIcon";
import { ContactWithUsIcon } from "./ContactWithUsIcon";
import { LogOutIcon } from "./LogOutIcon";
import { StrokeIconTheme } from "@/hooks/StrokeIconTheme";

const Icons = {
  search: SearchIcon,
  dashboard: DashboardIcon,
  analytics: AnalyticsIcon,
  transaction: TransactionIcon,
  settings: SettingsIcon,
  contactWithUs: ContactWithUsIcon,
  logOutIcon: LogOutIcon,
};

export type Icons = keyof typeof Icons;

export type IconProps = {
  type: Icons;
  handleSVGClick?: IconProps["type"] extends "search" ? () => void : undefined;
  isClicked: boolean;
};

export const Icon: FC<IconProps> = ({ type, isClicked, ...props }) => {
  const IconComponent = Icons[type];
  const isDark = StrokeIconTheme();

  const additionalProps = {
    stroke: isClicked ? "#FFB13D" : isDark ? "#4F5664" : "#D9D9D9",
  };
  return <IconComponent strokeColor={""} {...props} {...additionalProps} />;
};
