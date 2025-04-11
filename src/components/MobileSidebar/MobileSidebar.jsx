"use client"
import React, { useState } from 'react'
import {navMenus} from "@/utils/Menus"
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Bolka_logo from "@/assets/Images/Bolka_logo.png";
import { CustomButton } from '../Ui/Button/CustomButton';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
const MobileSidebar = ({ mobileSideMenu, setMobileSideMenu }) => {
    const [showDropdown, setshowDropdown] = useState(false)
    const router= useRouter();
    const handleNavigate = (e, state) => {
        e.stopPropagation();
        router.push(`/?state=${state}`,{ scroll: false });
        console.log(state)
        setTimeout(() => {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.delete('state');
            window.history.replaceState({}, '', currentUrl.toString());
        }, 800);
        setMobileSideMenu(false);
    };


    const handleSubMenu = () => {
        setshowDropdown(!showDropdown);
    };

    return (
        <div className={`overflow-auto md:hidden block transition-all duration-300 w-full md:inset-0 z-50  bg-[rgba(0,0,0,0.8)]  
        ${mobileSideMenu && " h-screen fixed right-0 top-0 left-0 bottom-0 "}`}>
            {mobileSideMenu &&
                <div className='text-white flex justify-center items-center cursor-pointer float-right w-10 h-10' onClick={() => setMobileSideMenu(false)}>
                    <X size={25} />
                </div>
            }
            <div className={`z-50 fixed top-0 h-screen w-60  bg-white flex flex-col justify-between p-5 scrollbar-thin scroll-smooth overflow-auto animate-in slide-in-from-left ease-in duration-300
                ${mobileSideMenu ? "left-0 " : "-left-60"}`}>
                <div>
                    <div>
                        <Image src={Bolka_logo} alt="Bolka Logo"/>
                    </div>
                    <div className='flex flex-col gap-5 mt-10'>
                        {navMenus.map((menu) => (
                            <div key={menu.id} className='cursor-pointer hover:text-[#E04F16] font-inter font-semibold text-base text-[#475467] flex flex-col gap-2 items-start' onClick={(e) => menu?.mode === "mobile" ? handleSubMenu() : handleNavigate(e, menu?.state)}>
                                <div className='flex gap-2 items-center '>
                                    {menu?.title} {showDropdown ? menu?.arrowUp : menu?.arrowDown}
                                </div>
                                {menu.title === "Industries" && showDropdown && (
                                    <div className="rounded-md flex gap-6 "  >
                                        <ul >
                                            {["Real Estate", "Healthcare", "E-commerce", "Education", "Banking & Financial Services", "Insurance"].map((item) => (
                                                <li key={item}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-[#E04F16]"
                                                    onClick={(e) => handleNavigate(e, menu?.state)}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-2 '>
                    <CustomButton title="Log In" variant="white-btn" href={"https://app.bolka.ai/"} />
                    <CustomButton title="Try demo now" variant="orange-btn" rightIcon={<ArrowUpRight size={20} />} href={"https://demo.bolka.ai/"} />
                </div>
            </div>
        </div>
    )
}

export default MobileSidebar