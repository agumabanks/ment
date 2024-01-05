// pages/index.tsx or your main component
import React from 'react';
import AutoScrollingLogos from './AutoScrollingLogos ';
// import AutoScrollingLogos from '../components/AutoScrollingLogos';
import Image from 'next/image';


const Logos: React.FC = () => {
  const partnerLogos = [
    <Image
    className="h-12"
    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
    alt="Next.js Logo"
    width={400}
    height={400}
    priority
  />,

  <Image
  className="h-12"
  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
  alt="Next.js Logo"
  width={400}
  height={400}
  priority
/>,

<Image
className="h-12"
src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
alt="Next.js Logo"
width={400}
height={400}
priority
/>,

<Image
className="h-12"
src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
alt="Next.js Logo"
width={400}
height={400}
priority
/>,<Image
className="h-12"
src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
alt="Next.js Logo"
width={400}
height={400}
priority
/>,
  ];

  return (
    <div className="mx-auto max-w-7xl m-10 py-12 px-6 lg:px-8">
      {/* Your other content */}

      {/* Auto-Scrolling Partner Logos */}
      <AutoScrollingLogos partnerLogos={partnerLogos} />
    </div>
  );
};

export default Logos;
