import ProtectedPage from "@/app/protectedRoutes";
import PaymentTable from "@/components/layout/main/dashboards/Payments";
import DashboardContainer from "@/components/shared/containers/DashboardContainer";
import HeadingDashboard from "@/components/shared/headings/HeadingDashboard";

import React from "react";

const CorporatePayment = () => {
  return (
    <ProtectedPage>
      <DashboardContainer>
        <div className="px-12">
          <HeadingDashboard />
        </div>
        <PaymentTable />
        
      </DashboardContainer>
    </ProtectedPage>
  );
};

export default CorporatePayment;
