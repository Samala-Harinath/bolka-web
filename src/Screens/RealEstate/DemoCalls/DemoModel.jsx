"use client"
import React from 'react'
import Modal from "@/components/Ui/Modal"
import { X } from 'lucide-react'
import { useState } from 'react'
import RealEstateVoice from './RealEstateVoice'

const DemoModel = ({ demoToggle, setDemoToggle }) => {
    const [tabs, setTabs] = useState(0)

    const tabsMenu = [
        { id: 0, label: 'Real Estate' },
        { id: 1, label: 'Education' },
        { id: 2, label: 'Insurence' },
        { id: 3, label: 'Banking' },
        { id: 4, label: 'Healthcare' },

    ]
    return (
        <Modal isOpen={demoToggle} onClose={() => setDemoToggle(false)} className={"max-w-5xl p-6"}>
            <div className='flex justify-between'>
                <h2 className='font-bold font-inter text-[24px]'>Demo Calls</h2>
                <X onClick={() => setDemoToggle(false)} className='cursor-pointer' />
            </div>
            <div className="flex mb-5 md:flex-row flex-col w-full rounded-lg border border-gray-300 md:min-h-9 min-h-[8rem] overflow-hidden mt-2 ">
                {tabsMenu.map((tab, idx, arr) => (
                    <button
                        key={idx}
                        onClick={() => setTabs(idx)}
                        className={`flex-1 py-1.5 px-4 text-sm font-medium transition-colors ${arr.length - 1 !== idx && "border-r border-gray-300"}
                            ${tabs === tab.id ? 'bg-[#F9FAFB] text-[#7F56D9] ' : 'text-gray-600 hover:text-gray-900'}`} >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className='mt-5 '>
                {tabs === 0 && <RealEstateVoice />}
            </div>
        </Modal>
    )
}

export default DemoModel