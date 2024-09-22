import { Button } from "antd";
import Image from "next/image";
import React from "react";

const CourseDetails = ({ course }: { course: any }) => {
  return (
    <div className="mx-auto  max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex  flex-col md:flex-row items-center justify-center">
        <div className="flex relative z-20 w-[50%] justify-center">
          <div className="bg-white m-16">
            <div className="absolute bg-gradient-to-r from-[#a3f4e6] to-[#6deccf] w-[10rem] md:w-[28rem] h-[5rem] md:h-[14rem] top-[20%] left-[1%] rounded-3xl -z-10 blur-[120px]"></div>
            <div className="w-[10rem] md:w-[28rem] h-[8rem] md:h-[18rem]">
              <Image
                width={800}
                height={600}
                src={course?.banner}
                alt={course?.title}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="my-4 w-full text-grayBlack  md:w-[50%]">
          <span className="text-gray-800 mb-2">{course?.category_id._id}</span>
          <h2 className="text-2xl uppercase font-bold mb-2">{course?.title}</h2>

          <p className="text-base font-bold mb-2">Author: {course?.author}</p>

          <h3 className="text-lg font-bold mb-2">
            Description:{" "}
            <span className="text-sm font-normal text-grayBlack">
              {course?.description}
            </span>
          </h3>

          <Button className="mt-5" type="primary" block size="large">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
