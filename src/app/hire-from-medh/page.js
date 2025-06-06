"use client";

import HireFromMedhBanner from "@/components/sections/hire-from-medh/hireFromMedhBanner";
import HireFromMedhCourseBanner from "@/components/sections/hire-from-medh/HireFromMedhCourseBanner";
import HireFromMedhFaq from "@/components/sections/hire-from-medh/HireFromMedhFaq";
import HireSection from "@/components/sections/hire-from-medh/HireSection";
import HiringProcess from "@/components/sections/hire-from-medh/HiringProcess";
import SkillsSection from "@/components/sections/hire-from-medh/SkillsSection";
import Registration from "@/components/sections/registrations/Registration";
import Certified from "@/components/sections/why-medh/Certified";

import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

function HireFromMedh() {
  return (
    <PageWrapper>
      <HireFromMedhBanner/>
      <HireSection />
      <SkillsSection />
      <HiringProcess />
      <div id="registration-form">
        <Registration showUploadField={true} pageTitle="hire_from_medh" />
      </div>
      <Certified />

      <HireFromMedhFaq />
      {/* <HireFromMedhCourseBanner /> */}
      
    </PageWrapper>
  );
}

export default HireFromMedh;
