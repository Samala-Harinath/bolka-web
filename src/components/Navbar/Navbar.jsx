"use client"
import React from 'react';
import Bolka_logo from "@/assets/Images/Bolka_logo.png";
import { CustomButton } from '../Ui/Button/CustomButton';
import { ArrowUpRight, Menu } from 'lucide-react';
import { navMenus } from '../../utils/Menus';
//import MobileSidebar from '../MobileSidebar/MobileSidebar';
import { useState } from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MobileSidebar from '../MobileSidebar/MobileSidebar';
const Navbar = () => {
  const [mobileSideMenu, setMobileSideMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { trackEvent } = useMatomo();
  let hideDropdownTimeout;
  const router = useRouter();
  const handleMouseEnter = () => {
    clearTimeout(hideDropdownTimeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hideDropdownTimeout = setTimeout(() => {
      setShowDropdown(false);
    }, 500);
  };
  const handleNavigateUsecase = (e, state, route) => {
    e.stopPropagation();
    router.push(`/?state=${state}`,{ scroll: false });
    setTimeout(() => {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('state');
      window.history.replaceState({}, '', currentUrl.toString());
      trackEvent({
        category: "Navbar",
        action: "click-event",
        name: `Sub-Navbar-${route}`,
        href: window.location.origin,
      });
    }, 800);
  };
  
  const handleNavigate = (state, route) => {
    router.push(`/?state=${state}`,{ scroll: false });
    setTimeout(() => {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('state');
      window.history.replaceState({}, '', currentUrl.toString());
      trackEvent({
        category: "Navbar",
        action: "click-event",
        name: `Navbar-${route}`,
        href: window.location.origin,
      });
    }, 800);
  }

  const handleNavbarSection = (val) => {
    if (val === 1) {
      window.open('https://app.bolka.ai/', '_blank');
      trackEvent({ category: 'Navbar-Section', action: 'click-event', href: 'https://app.bolka.ai/', name: 'LogIn-Button' });
    } else if (val === 2) {
      window.open('https://demo.bolka.ai/', '_blank');
      trackEvent({ category: 'NavBar-Section', action: 'click-event', href: 'https://demo.bolka.ai/', name: 'TryDemoNow-Button' });
    }
  };
  const listStyle = 'cursor-pointer hover:text-[#E04F16] font-inter font-semibold text-base text-[#475467] flex gap-2 items-center';
  return (
    <div className='mt-5 sticky top-0 z-50 w-full'>
    <MobileSidebar mobileSideMenu={mobileSideMenu} setMobileSideMenu={setMobileSideMenu} />
    <div className="px-5 flex justify-between items-center z-50 h-20 shadow-sm m-auto rounded-3xl bg-[#F7F7F7]">
      <Image src={Bolka_logo} alt="Bolka Logo" onClick={() => handleNavigate(null, 'Bolka-logo')}   className="cursor-pointer"/>
        <div className="flex items-center gap-10">
            <ul className="hidden md:flex gap-6 items-center">
                {navMenus.map((menu) => (
                    <li
                        key={menu.id}
                        className={listStyle}
                        onClick={() => handleNavigate(menu?.state, "home")}
                        onMouseEnter={menu.title === "Industries" ? handleMouseEnter : undefined}
                        onMouseLeave={menu.title === "Industries" ? handleMouseLeave : undefined}
                    >
                        {menu?.title} {menu?.arrowDown}

                        {menu.title === "Industries" && showDropdown && (
                            <div
                                className="absolute top-[72px] right-16 mt-2 bg-white shadow-md rounded-md p-4 flex gap-6"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <ul>
                                    {["Real Estate", "Healthcare", "E-commerce"].map((item) => (
                                        <li
                                            key={item}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-[#E04F16]"
                                            onClick={(e) => handleNavigateUsecase(e, 'useCases', item)} 
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    {["Education", "Banking & Financial Services", "Insurance"].map((item) => (
                                        <li
                                            key={item}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-[#E04F16]"
                                            onClick={(e) => handleNavigateUsecase(e, 'useCases', item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className='gap-2 hidden md:flex'>
                <CustomButton title="Log In" variant="white-btn" onClick={() => handleNavbarSection(1)} />
                <CustomButton title="Try demo now" variant="orange-btn" rightIcon={<ArrowUpRight size={20} />} onClick={() => handleNavbarSection(2)} />
            </div>
            <div className='gap-2 flex md:hidden cursor-pointer' onClick={() => setMobileSideMenu(true)}>
                <Menu />
            </div>
        </div>
    </div>
</div>
);
}

export default Navbar
