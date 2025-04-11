import React, { useEffect, useState } from 'react';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react';

const instance = createInstance({
  urlBase: 'https://nexaltors.matomo.cloud/',
  siteId: 5,
  trackerUrl:'https://nexaltors.matomo.cloud/index.php',
  srcUrl: 'https://cdn.matomo.cloud/nexaltors.matomo.cloud/matomo.js',
});

const Matomo = ({ children }) => {
  const [value,setValue] = useState(instance);
  
  useEffect(() =>{
    setValue(instance);
  },[instance])

  return <MatomoProvider value={value}>{children}</MatomoProvider>
};

export default Matomo;