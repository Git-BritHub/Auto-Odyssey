"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button
    // TODO: set disabled to true once logic is added to button
     disabled={false}
     type={btnType || "button"}
    //  TODO: add my own styling to button
     className={`custom-btn ${containerStyles}`}
     onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton