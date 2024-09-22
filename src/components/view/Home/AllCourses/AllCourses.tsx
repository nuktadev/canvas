import { Button } from "antd";
import CourseSliders from "./CourseSliders";
import { getAllCourses } from "@/services/courses/getAllCourses";
import { ICourse } from "@/types/global";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

const AllCourses = async () => {
  const data = await getAllCourses([{ name: "limit", value: "20" }]);
  const courses = data?.data as ICourse[];
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex pb-5 justify-between items-center">
        <h1 className="text-xl font-medium sm:text-3xl sm:font-bold font-poppins text-secondary">
          Trending Courses
        </h1>
        <Link className="no-underline" href="/courses">
          <Button
            size="large"
            className="text-primary group shadow-gray-400 shadow-sm text-sm font-semibold  flex justify-center border-none items-center"
          >
            View All{" "}
            <ArrowRightOutlined className="transition-all delay-50 duration-500 group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
      <div className="flex w-full py-5 justify-between items-center">
        <CourseSliders courses={courses} />
      </div>
    </div>
  );
};
export default AllCourses;
