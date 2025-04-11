'use client';
import React from 'react'
import Modal from "@/components/Ui/Modal"
import RecordingSection from "@/Screens/Home/RecordingSection"
import { X } from 'lucide-react'

const ListenVoicesModal = ({ listenVoiceToggle, setListenVoiceToggle }) => {
    return (
        <Modal isOpen={listenVoiceToggle} onClose={() => setListenVoiceToggle(false)} className={"max-w-7xl"}>
            <div className='flex justify-end'>
                <X onClick={() => setListenVoiceToggle(false)} className='cursor-pointer' />
            </div>
            <RecordingSection />
        </Modal>
    )
}

export default ListenVoicesModal