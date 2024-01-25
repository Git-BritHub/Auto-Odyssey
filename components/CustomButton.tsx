"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    <button
    // TODO: set disabled to true once logic is added to button
     disabled={false}
    //  TODO: set up button type dynamically and replace current placeholder
     type={"button"}
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