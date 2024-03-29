"use client";

import { useEffect, useState } from "react";
import {
  TengeLargeCurrencyIcon,
  TengeSmallCurrencyIcon,
} from "@/components/Icons";

export const YourBudget = () => {
  const [budget, setBudget] = useState({
    total: "1,120,448", // need to do Empty with real API
    spentThisMonth: "534,234", // need to do Empty with real API
    spentLastMonth: "413,323", // need to do Empty with real API
  });

  useEffect(() => {
    fetch("https://your-api-url.com/endpoint")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBudget({
          total: data.total,
          spentThisMonth: data.spentThisMonth,
          spentLastMonth: data.spentLastMonth,
        });
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <div className="bg-[#0F1623] ml-[20px] w-[321px] h-[160px] rounded-lg flex flex-col pl-[26px] pt-[12px]">
      <h1 className="text-white text-[28px] font-medium">Your budget</h1>
      <div className="flex flex-row items-center space-x-[3px]">
        <h1 className="text-white text-5xl font-normal">{budget.total}</h1>
        <TengeLargeCurrencyIcon />
      </div>
      <div className="flex flex-row space-x-[45px] pt-[5px]">
        <div className="flex flex-col">
          <h3 className="text-[#696D76] text-xs font-normal">
            Spent this month
          </h3>
          <div className="flex flex-row items-center space-x-[3px]">
            <h3 className="text-[#CFD0D3] text-xl font-normal">
              {budget.spentThisMonth}
            </h3>
            <TengeSmallCurrencyIcon />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#696D76] text-xs font-normal">
            Spent last month
          </h3>
          <div className="flex flex-row items-center space-x-[3px]">
            <h3 className="text-[#CFD0D3] text-xl font-normal">
              {budget.spentLastMonth}
            </h3>
            <TengeSmallCurrencyIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
