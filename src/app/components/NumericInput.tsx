"use client";
import React, { useState } from "react";

const NumericInput: React.FC = () => {
  const [value, setValue] = useState<string>("2.53");
  const maxValue = 100; // Максимальное значение для кнопки MAX

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Разрешаем только цифры, точку и пустую строку
    if (inputValue === "" || /^\d*\.?\d*$/.test(inputValue)) {
      // Проверяем, что значение положительное
      const numValue = parseFloat(inputValue);
      if (inputValue === "" || (numValue >= 0 && !isNaN(numValue))) {
        setValue(inputValue);
      }
    }
  };

  const handleMaxClick = () => {
    setValue(maxValue.toString());
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <div className="max-w-sm">
      <div className="relative">
        <div className="flex items-center  overflow-hidden focus-within:border-blue-500 text-light-gray  py-2 px-9 shadow-main-shadow rounded-full">
          <div className="flex flex-col justify-between">
            <input
              type="text"
              value={value}
              onChange={handleInputChange}
              placeholder="0.00"
              className=" text-xl font-bold  bg-white outline-none"
            />
            <div className="text-sm font-normal">0.00</div>
          </div>

          <button
            onClick={handleMaxClick}
            className=" cursor-pointer hover:bg-gray-50 transition-colors shadow-main-shadow rounded-full text-base  font-medium py-1 px-5 "
          >
            Max
          </button>
        </div>

        {/* Значение снизу */}
      </div>
    </div>
  );
};

export default NumericInput;
