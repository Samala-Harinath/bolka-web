"use client"
import React, { useRef, useState, useCallback, useMemo } from 'react';
import { CustomButton } from "@/components/Ui/Button/CustomButton"
import { useEffect } from 'react';
import play_Female from '@/assets/Icon/play_Female.png';
import pause_Female from '@/assets/Icon/pause_Female.png';
import play_Male from '@/assets/Icon/play_Male.png';
import pause_Male from '@/assets/Icon/pause_Male.png';
import Recording1 from '@/assets/Images/Realestate/Recording1.png';
import Recording2 from '@/assets/Images/Realestate/Recording2.png';
import Recording3 from '@/assets/Images/Realestate/Recording3.png';
import Recording4 from '@/assets/Images/Realestate/Recording4.png';
import Recording5 from '@/assets/Images/Realestate/Recording5.png';
import Recording6 from '@/assets/Images/Realestate/Recording6.png';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const RealEstateMaleIntrested = "/Audio/RealEstateMaleIntrested.mp3";
const EducationFemaleInterested = "/Audio/EducationFemaleInterested.mp3";
const RealEstateFemaleNotInterested = "/Audio/RealEstateFemaleNot-interested.mp3";
const HealthInsuranceFemaleIntrested = "/Audio/HealthInsuranceFemaleIntrested.mp3";
const HealthcareMaleIntrested = "/Audio/HealthcareMaleIntrested.mp3";
const BankingEMIReminderFemaleIntrested = "/Audio/BankingEMIReminderFemaleIntrested.mp3";
const industries = [
  { id: 1, image: Recording1, industry: "Real Estate", audio: RealEstateMaleIntrested, voice: "Male", status: "Customer interested", play: play_Male, pause: pause_Male },
  { id: 2, image: Recording2, industry: "Real Estate", audio: RealEstateFemaleNotInterested, voice: "Female", status: "Customer not interested", play: play_Female, pause: pause_Female },
  { id: 3, image: Recording3, industry: "Education", audio: EducationFemaleInterested, voice: "Female", status: "Customer interested", play: play_Female, pause: pause_Female },
  { id: 4, image: Recording4, industry: "Insurance", audio: HealthInsuranceFemaleIntrested, voice: "Female", status: "Customer interested", play: play_Male, pause: pause_Male },
  { id: 5, image: Recording5, industry: "Banking", audio: BankingEMIReminderFemaleIntrested, voice: "Female", status: "Reminder", play: play_Female, pause: pause_Female },
  { id: 6, image: Recording6, industry: "Healthcare", audio: HealthcareMaleIntrested, voice: "Male", status: "Reminder", play: play_Male, pause: pause_Male },
];

const RecordingSection = () => {

  const [selectedIndustry, setSelectedIndustry] = useState(false);
  const [currentTimes, setCurrentTimes] = useState({});
  const [durations, setDurations] = useState({});
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const audioRefs = useRef({});
  const { trackEvent } = useMatomo();
  const router =useRouter()
  const handleLoadedMetadata = useCallback((id) => {
    const audioDuration = audioRefs.current[id]?.duration;
    if (!isNaN(audioDuration) && isFinite(audioDuration)) {
      setDurations((prev) => ({ ...prev, [id]: audioDuration }));
    }
  }, []);
  useEffect(() => {
    Object.values(audioRefs.current).forEach(audio => {
      if (audio && audio.readyState >= 1) {
        const id = Object.keys(audioRefs.current).find(key => audioRefs.current[key] === audio);
        handleLoadedMetadata(id);
      }
    });
  }, [handleLoadedMetadata]);
  const handleTimeUpdate = useCallback((id) => {
    setCurrentTimes((prev) => ({
      ...prev,
      [id]: audioRefs.current[id]?.currentTime || 0,
    }));
  }, []);

  const handleAudioEnded = useCallback((id) => {
    // Reset everything when audio ends
    setSelectedIndustry(false)
    setPlayingAudioId(null);
    setCurrentTimes({});
    if (audioRefs.current[id]) {
      audioRefs.current[id].currentTime = 0;
    }
  }, []);

  const handleClick = useCallback((id, industry, voice) => {
    setSelectedIndustry((prevIndex) => (prevIndex === id ? false : id));
    const currentAudio = audioRefs.current[id];

    if (!currentAudio) return;

    if (playingAudioId === id) {
      trackEvent({ category: 'Home-Recording', action: 'click-event', name: `Voice-${industry}-${voice}`, });
      if (currentAudio.paused) {
        currentAudio.currentTime = 0;
        currentAudio?.play();
      } else {
        currentAudio?.pause();
      }
    } else {
      if (playingAudioId !== null) {
        audioRefs.current[playingAudioId]?.pause();
      }
      currentAudio.currentTime = 0;
      currentAudio?.play();
      setPlayingAudioId(id);
    }
  }, [playingAudioId]);

  const handleContact = useCallback(() => {
    router.push("/", { scroll: false });

    setTimeout(() => {
      router.push("/?state=contact", { scroll: false });

      trackEvent({
        category: "Home-Recording",
        action: "click-event",
        name: "ContactUs-Button",
        href: window.location.origin + "/",
      });
    }, 50);
  }, [router]);


  const memoizedIndustries = useMemo(() => industries, []);

  const handleRecordingSection = () => {
    window.open('https://demo.bolka.ai/', '_blank');
    trackEvent({ category: 'Home-Recording', action: 'click-event', href: 'https://demo.bolka.ai/', name: 'TryDemoNow-Button', });
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col justify-center items-center w-full gap-3">
        <h1 className="font-krona font-normal md:text-4xl text-2xl text-center text-[#2E2F32]">
          Listen to Actual Call Recordings
        </h1>
        <p className="max-w-md font-inter font-normal text-base text-center w-full">
          Explore how businesses and solopreneurs like yours are using Bolka to deliver seamless
          customer interactions with a human-like voice and emotion
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 mt-7 gap-6">
        {memoizedIndustries.map(({ id, image, status, audio, voice, industry, play, pause }) => {
          const boxRef = useRef(null);
  

          return (
            <div ref={boxRef} key={id} className={`flex flex-col justify-center items-center p-0.5 rounded-[1.7rem] relative  overflow-hidden  border border-[#F9DBAF] scale-105`} onClick={() => handleClick(id, industry, voice)} >
              <Image src={image} alt={industry} className='z-10'/>
              <audio
              
                ref={(el) => (audioRefs.current[id] = el)}
                onLoadedMetadata={() => handleLoadedMetadata(id)}
                onTimeUpdate={() => handleTimeUpdate(id)}
                onEnded={() => handleAudioEnded(null)}
                controls
                className="hidden"
              >
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <div
                className={` absolute bottom-0 w-full  z-0 ${selectedIndustry === id && (id === 1 || id === 6 || id === 4 ? 'bg-[#5798e7]' : 'bg-[#e2a584]')}`}
                // style={{ height: `${(currentTimes[id] / durations[id]) * 100 || 0}%` }}
                style={{ height: durations[id] > 0 ? `${(currentTimes[id] / durations[id]) * 100}%` : "0%" }}
              />


              <div className='z-10 absolute w-full h-full ' >

                <div className='h-[30%]'></div>
                <div className='h-[70%]  justify-center items-center flex flex-col'>
                  <div className="flex justify-center items-center w-20  z-10 " >
                    <Image src={selectedIndustry === id ? pause : play} alt={"Play_Icon_toggle"}/>
                  </div>
                  <div
                    className={`flex flex-col justify-center items-center gap-2  bottom-2 w-full ${selectedIndustry === id
                      ? id === 1 || id === 6 || id === 4
                        ? 'text-[#125DB9]'
                        : 'text-[#EB6829]'
                      : 'text-[#616161]'
                      }`}
                  >
                    <div className=" flex font-inter font-bold text-xs ">
                      {isFinite(currentTimes[id]) ? Math.floor((currentTimes[id] || 0) / 60) : "0"}:
                      {isFinite(currentTimes[id]) ? Math.floor((currentTimes[id] || 0) % 60) : "00"} /
                      {isFinite(durations[id]) ? Math.floor((durations[id] || 0) / 60) : "0"}:
                      {isFinite(durations[id]) ? Math.floor((durations[id] || 0) % 60) : "00"}
                    </div>
                    <span className="font-inter font-medium text-xl">{industry}</span>
                    <span className="font-inter font-bold text-[9px]">{status}</span>
                  </div></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-5 mt-10">
        <CustomButton title="Contact us" variant="white-btn" onClick={handleContact} />
        <CustomButton title="Try demo now" variant="orange-btn" onClick={() => handleRecordingSection()} />
      </div>
    </div>
  );
};

export default RecordingSection;