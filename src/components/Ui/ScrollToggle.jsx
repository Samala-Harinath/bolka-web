"use client"
import React, { useRef, useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { ArrowUp } from "lucide-react";

const ScrollToggle = () => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const updateScrollState = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.body.scrollHeight;
            const clientHeight = window.innerHeight;

            if (scrollTop + clientHeight >= scrollHeight - 5) {
                setIsBottom(true);
            } else {
                setIsBottom(false);
            }
        };

        window.addEventListener("scroll", updateScrollState);

        return () => {
            window.removeEventListener("scroll", updateScrollState);
        };
    }, []);

    const handleScroll = () => {
        if (isBottom) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
    };
    return (
        <button onClick={handleScroll} className="fixed bottom-10 right-10 bg-[#ef6820] text-white p-2 rounded-[10px] shadow-lg z-40 outline-none" >
            {isBottom ? <ArrowUp /> : <ArrowDown />}
        </button>
    );
};

export default ScrollToggle;
