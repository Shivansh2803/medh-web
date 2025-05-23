"use client";
import React from "react";

import Registration from "@/components/sections/registrations/Registration";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import HiringProcess from "@/components/sections/join-educator/hiringProcess";
import Benefits from "@/components/sections/join-educator/joinAsBenefits";
import EducatorBanner from "@/components/sections/join-educator/educatorBanner";
import EducatorCourceBanner from "@/components/sections/join-educator/educatorCourseBanner";
import TechEducator from "@/components/sections/join-educator/techEducator";
import MedhOffering from "@/components/sections/join-educator/medhOffering";
import EducatorFaq from "@/components/sections/join-educator/educatorFaq";

import Certified from "@/components/sections/why-medh/Certified";

function JoinEducator() {
  return (
    <PageWrapper>
      <div>
        <EducatorBanner />
        <TechEducator />
        <MedhOffering />
        <Benefits />
        <HiringProcess />
        <div id="registration-section">
          <Registration showUploadField={true} pageTitle="join_as_educator" />
        </div>
        <Certified />
        <EducatorFaq />
        {/* <div className="pb-16">
          <EducatorCourceBanner />
        </div> */}
        
      </div>
    </PageWrapper>
  );
}
export default JoinEducator;

