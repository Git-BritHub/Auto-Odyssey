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
    //  TODO: replace placeholder template string when ready to add class names
     className={`custom-btn`}
     onClick={() => {
        // TODO: give onClick logic
     }}
    >
        {/* TODO: update with real title name later and update className template w/additional styles */}
        <span className={`flex-1`}>
            Title
        </span>
    </button>
  )
}

export default CustomButton