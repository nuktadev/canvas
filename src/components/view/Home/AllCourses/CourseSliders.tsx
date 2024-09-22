"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { ICourse } from "@/types/global";
import { Button } from "antd";
const CourseSliders = ({ courses }: { courses: ICourse[] }) => {
  const swiperRef = useRef(null);
  const goNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper!.slideNext();
    }
  };

  const goPrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="relative">
      <div className="flex relative  w-full z-40 gap-3 items-center justify-between">
        <Button
          className="swiper-button-prev absolute top-28 -left-5 flex items-center justify-center w-12 h-12 border border-primary shadow-lg shadow-gray-400 bg-primary text-main rounded-full"
          onClick={goPrev}
        >
          <ArrowLeftOutlined className="text-black mt-1 text-lg font-bold" />
        </Button>
        <Button
          className="swiper-button-next absolute top-28 -right-5 flex items-center justify-center w-12 h-12 border border-primary shadow-lg shadow-gray-400 bg-primary text-main rounded-full"
          onClick={goNext}
        >
          <ArrowRightOutlined className="text-black mt-1  text-lg font-bold" />
        </Button>
      </div>
      <Swiper
        ref={swiperRef}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper grid grid-cols-1 sm:grid-cols-3"
      >
        {courses?.map((course: ICourse) => (
          <SwiperSlide className="bg-white shadow-lg rounded" key={course._id}>
            <Link className="group" href={`/courses/${course._id}`}>
              <div className="w-full h-[250px]">
                <Image
                  src={course?.banner}
                  alt="course"
                  layout="responsive"
                  height={500}
                  width={800}
                  className="w-full  rounded-md h-full"
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

export default CourseSliders;
