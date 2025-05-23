"use client";
import { BellIcon, SearchIcon } from "@/assets/images/icon/SearchIcon";
import Image from "next/image";
import { useEffect, useState } from "react";
import teacherImage1 from "@/assets/images/teacher/teacher__1.png";
import Link from "next/link";
import { apiUrls } from "@/apis";
import useGetQuery from "@/hooks/getQuery.hook";

const HeadingDashboardOnly = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userId, setUserId] = useState(null);
  const { getQuery, loading } = useGetQuery();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      getQuery({
        url: `${apiUrls?.user?.getDetailsbyId}/${userId}`,
        onSuccess: (data) => {
          setUserData(data?.data);
          console.log("User data in header: ", data?.data);
        },
        onFail: (error) => {
          console.error("Failed to fetch user details:", error);
        },
      });
    }
  }, [userId]);

  return (
    <div
      className="flex  my-6 justify-between items-center p-4 bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:shadow-gray-700"
      style={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Search Bar */}
      <div className="relative flex-grow max-w-[70%]">
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-white transition-all duration-200" />
        <input
          type="text"
          placeholder="Search..........."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 py-3 text-sm rounded-lg focus:outline-none bg-[#F7F7F7] dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-primaryColor focus:border-transparent transition duration-300"
        />
      </div>

      {/* Notification and User Section */}
      <div className="flex items-center gap-6">
        {/* Bell Icon (if needed) */}
        {/* <BellIcon className="text-gray-500 hover:text-black cursor-pointer dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out" /> */}

        <div className="border-l-2 border-gray-300 h-10 mx-4 dark:border-gray-600" />

        {/* User Avatar & Dropdown */}
        <div className="flex items-center gap-3">
          {/* <Link href={`/dashboards/${userData?.role[0]}-profile`}> */}
          <Link
            href={`/dashboards/${
              userData?.role[0] === "coorporate-student"
                ? "coorporate-employee-profile"
                : `${userData?.role[0]}-profile`
            }`}
          >
            <Image
              src={userData?.user_image || teacherImage1}
              alt="User Avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primaryColor transition-all duration-300 hover:ring-4"
            />
          </Link>
          <p>{userData?.full_name}</p>
        </div>
      </div>
    </div>
  );
};

export default HeadingDashboardOnly;
