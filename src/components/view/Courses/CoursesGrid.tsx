"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ICourse } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "antd";
const CoursesGrid = ({
  course,
  courses,
}: {
  course: any;
  courses: ICourse[];
}) => {
  const filterBySubCategory = courses?.filter((c: ICourse) => {
    return c?.sub_category_id?._id === course?._id;
  });
  return (
    <div className="py-8">
      {filterBySubCategory.length > 0 && (
        <div>
          <h2 className="flex" key={course?.category_id?.title}>
            {course?.category_id?.title} - {course?.title}
          </h2>
          <Divider className=" hidden md:block bg-mainBlue"></Divider>
        </div>
      )}
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper grid grid-cols-1 sm:grid-cols-4 mt-8"
      >
        {filterBySubCategory?.map((course: ICourse) => (
          <SwiperSlide className="bg-white shadow-lg rounded" key={course._id}>
            <Link className="group" href={`/courses/${course._id}`}>
              <div className="w-full h-[250px]">
                <Image
                  src={course?.banner}
                  alt="course"
                  layout="responsive"
                  height={800}
                  width={800}
                  className="w-full  rounded-t-md h-full"
                />
              </div>
              <h3 className="text-center mt-3 pb-3  uppercase group-hover:text-main text-black text-base font-poppins pt-1">
                {course.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoursesGrid;
