import React, { Fragment } from 'react';

export const CustomButton = ({ title, className = "", icon, rightIcon, onClick, href, variant = "default", disabled = false, type }) => {
    let defaultClassName = `py-2 px-4 font-medium font-syne rounded-xl flex items-center gap-3 ${!disabled && "transform active:scale-y-75 transition-transform"} `;
    let styleClassName = "";

    switch (variant) {
        case "orange-btn":
            styleClassName = ` text-black  border-none flex justify-center items-center ${disabled ? "bg-[#ccc]" : " shadow-[inset_0_20px_40px_rgba(234,172,95,1)] hover:shadow-[inset_0_20px_40px_rgba(234,172,95,0.7)] "}`;
            break;
        case "white-btn":
            styleClassName = `text-[#344054] justify-center ${disabled ? "bg-[#ccc]" : " shadow-[inset_0_20px_45px_rgba(203,217,225,1)] hover:shadow-[inset_0_20px_45px_rgba(203,217,225,0.5)] "}`;
            break;
        case "blue-btn":
            styleClassName = `text-white border-none flex justify-center items-center ${disabled ? "bg-[#ccc]" : " shadow-[inset_0_20px_45px_rgba(127,86,217,1)] hover:shadow-[inset_0_20px_45px_rgba(127,86,217,0.5)] "}`;
            // styleClassName = ` text-black  border-none flex justify-center items-center ${disabled ? "bg-[#ccc]" : " shadow-[inset_0_20px_40px_rgba(234,172,95,1)] hover:shadow-[inset_0_20px_40px_rgba(234,172,95,0.7)] "}`;
            break;
        default:
            styleClassName = "bg-white border-gray-300 hover:bg-gray-100";
    }

    const combinedClassName = `${defaultClassName} ${styleClassName} ${className}`.trim();

    return (
        <Fragment>
            {href ? (
                <a href={href} className={combinedClassName} onClick={onClick} target='_blank' rel='noreferrer'>
                    {icon && icon}
                    {title}
                    {rightIcon && rightIcon}
                </a>
            ) : (
                <button type={type ?? "submit"} className={combinedClassName} onClick={onClick} disabled={disabled}>
                    {icon && icon}
                    {title}
                    {rightIcon && rightIcon}
                </button>
            )}
        </Fragment>
    );
};
