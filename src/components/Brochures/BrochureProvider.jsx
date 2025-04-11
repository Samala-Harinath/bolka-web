"use client"
import { createContext, useContext} from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
const BrochureContext = createContext();

export const BrochureProvider = ({ children }) => {
  const [brochuresToggle, setBrochuresToggle] = useState(false);

  return (
    <BrochureContext.Provider value={{ brochuresToggle, setBrochuresToggle }}>
      {children}
    </BrochureContext.Provider>
  );
};

export const useBrochure = () => useContext(BrochureContext);
