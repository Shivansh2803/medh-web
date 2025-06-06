import ProtectedPage from "@/app/protectedRoutes";
import StudentDashboardMain from "@/components/layout/main/dashboards/StudentDashboardMain";
import DashboardContainer from "@/components/shared/containers/DashboardContainer";

export const metadata = {
  title: "Student Dashboard | Medh - Education LMS Template",
  description: "Student Dashboard | Medh - Education LMS Template",
};
const Student_Dashboard = () => {
  return (
    <ProtectedPage>
      <main>
        <DashboardContainer>
          <StudentDashboardMain />
        </DashboardContainer>
        
      </main>
    </ProtectedPage>
  );
};

export default Student_Dashboard;
