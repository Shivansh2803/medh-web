"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useGetQuery from "@/hooks/getQuery.hook";
import { apiUrls } from "@/apis";
import EnrollCoursesCard from "./EnrollCoursesCard";

const CoorporateEnrollCourses = () => {
  const router = useRouter();
  const [enrollCourses, setEnrollCourses] = useState([]);
  const [employeeId, setEmployeeId] = useState(null);
  const { getQuery } = useGetQuery();

  const handleCardClick = (id) => {
    router.push(`/dashboards/coorporate-employee-my-courses/${id}`);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      setEmployeeId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (employeeId) {
      getQuery({
        url: `${apiUrls?.CoorporateEnrollCourse?.getEnrolledCoursesByEmployeeId}/${employeeId}`,
        onSuccess: (data) => {
          const courses = data.courses?.slice(0, 20);
          setEnrollCourses(courses);
          console.log(data, "Real Course Data");
          console.log(courses, "Extracted Course Data");
        },
        onFail: (error) => {
          console.error("Failed to fetch enrolled courses:", error);
        },
      });
    }
  }, [employeeId]);

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-semibold text-[#282F3E]">
          Enrolled Courses
        </h2>
        {/* <a
          href="/dashboards/coorporate-all-enrolled-courses"
          className="text-sm font-medium text-green-500 hover:underline"
        >
          View All
        </a> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {enrollCourses.map((course, i) => {
          console.log(course);
          return (
            <EnrollCoursesCard
              key={course._id}
              title={course.course_title}
              image={course.course_image}
              isLive={course.course_tag === "Live"}
              progress={40}
              onClick={() => handleCardClick(course._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoorporateEnrollCourses;
