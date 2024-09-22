"use client";
import { ICourse } from "@/types/global";
import { List } from "antd";
import Image from "next/image";
import Link from "next/link";

const SubCategoryCourses = ({ courses }: { courses: ICourse[] }) => {
  return (
    <section className="bg-[rgb(245_252_252)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto pb-8 sm:pb-16 max-w-lg text-center">
          <h2 className="text-2xl text-black font-bold sm:text-4xl">
            SubCourses By Courses
          </h2>

          <p className="mt-4 text-base text-grayBlack">
            Learn from the best of the best in the field.
          </p>
        </div>

        <div>
          <List
            grid={{
              gutter: 10,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 3,
              xxl: 3,
            }}
            pagination={{
              pageSize: 9,
            }}
            dataSource={courses}
            renderItem={(item: ICourse) => (
              <List.Item className=" h-full bg-white rounded border border-gray-200 p-2 shadow-xl transition  hover:shadow-pink-white/10">
                <div className="w-full rounded h-[200px]">
                  <Image
                    src={item?.banner}
                    height={800}
                    width={800}
                    quality={75}
                    alt="image"
                    className="w-full rounded h-full"
                  />
                </div>

                <div className="p-2 flex flex-col gap-2">
                  <h2 className="mt-4 uppercase text-lg font-semibold text-grayBlack">
                    {item?.title}
                  </h2>
                  <p className="text-grayBlack overflow-hidden text-sm line-clamp-2">
                    {item?.description}
                  </p>
                </div>

                <div>
                  <Link
                    className="py-2 flex justify-center items-center bg-slate-200 font-medium text-black"
                    href={`/courses/${item?._id}`}
                  >
                    Courses Details
                  </Link>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default SubCategoryCourses;
