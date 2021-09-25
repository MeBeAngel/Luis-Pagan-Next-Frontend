import React from "react";
import Image from 'next/image';
import Banner from "../public/images/bottom-banner.svg";
import MobileBanner from "../public/images/bottom-banner-mobile.svg";

export default function NationalGuardBanner() {
  return (
    <div>
      {/* Mobile Only */}
      <div className="nation-guard-banner-mobile">
        <a href="https://www.nationalguard.com/">
          <Image src={MobileBanner} alt="" />
        </a>
      </div>

      {/* Tablet and Desktop Only */}
      <div className="nation-guard-banner">
        <a href="https://www.nationalguard.com/">
          <Image src={Banner} alt="" />
        </a>
      </div>
    </div>
  );
}
