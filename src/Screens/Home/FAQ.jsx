import React, { useState } from 'react';
import { SquarePlus, SquareMinus } from 'lucide-react';

const FAQ = ({faqRef}) => {
    const [openIndices, setOpenIndices] = useState([]);

    const toggleFunction = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    const FrequentlyAskedQuestions = [
        { title: "1. Do you allow political campaign?", description: "No, we do not allow political campaign. In fact, we do not allow campaign involving religion, investment, gambling, alcohol, etc. We have inbuilt the guardrails to deny such scripts’ calls.  " },
        { title: "2. Is the money paid refundable?", description: "No, we provide free testing / demo. We encourage you to test the system before purchasing the packs / services." },
        { title: "3. Do you scrub the DND?", description: "Yes, we have a service to scrub the DND. However, we do not guarantee the veracity of the DND or Non-DND numbers. " },
        { title: "4. Do you charge for DND Scrubbing?", description: "We charge for the infrastructure use while scrubbing the DND. " },
        { title: "5. Can I bring my own number for inbound / outbound calls?", description: "Yes, we can guide you to buy your own number. This is best strategy as you own your number. " },
        { title: "6. Do you share data with third parties?", description: "We do not share the data with third parties. However, if there is any legal demand, we may provide the same to the authorities." },
        { title: "7. How do you ensure data privacy and safety?", description: "We have implemented encryption algorithms at the data level to ensure that any attempt to hack / unauthorised access is void. Also, we have implemented the web security measures at various levels like 2FA, and web security services to block the unauthorized access, DDOS & injection attacks." },
        { title: "8. What industries do you support?", description: "Banking, Insurance, Financial Institute, Government, Real Estate, education, Retail, Manufacturing, Pharma, Healthcare, and Services." }
    ];

    return (
        <div className="flex flex-col items-center w-full max-w-screen-md mx-auto  px-4 gap-10" ref={faqRef}>
            <h1 className='font-krona font-normal text-4xl text-[#1F2229]'>Frequently asked questions</h1>
            <div className="w-full space-y-4 ">
                {FrequentlyAskedQuestions.map((item, i) => (
                    <div key={i} className="border rounded-2xl overflow-hidden shadow-sm">
                        <button 
                            className={`flex items-center justify-between w-full p-4 text-lg font-medium transition-all ${openIndices.includes(i) ? 'bg-gray-100' : 'bg-white'}`} 
                            onClick={() => toggleFunction(i)}
                        >
                            <span className="text-left font-inter">{item.title}</span>
                            {openIndices.includes(i) ? <SquareMinus /> : <SquarePlus />}
                        </button>
                        {openIndices.includes(i) && (
                            <div className="p-4 bg-white text-gray-700 font-inter">
                                <p>{item.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;