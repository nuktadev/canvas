"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IBook } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
const BooksGrid = ({ books }: { books: IBook[] }) => {
  return (
    <div>
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
        className="mySwiper grid grid-cols-1 sm:grid-cols-4"
      >
        {books?.map((book: IBook) => (
          <SwiperSlide className="bg-white shadow-lg rounded" key={book._id}>
            <Link className="group" href={`/books/${book._id}`}>
              <div className="w-full h-[250px]">
                <Image
                  src={book?.cover_page}
                  alt="course"
                  layout="responsive"
                  height={800}
                  width={800}
                  className="w-full  rounded-t-md h-full"
                />
              </div>
              <h3 className="text-center mt-3 pb-3  uppercase group-hover:text-main text-black text-base font-poppins pt-1">
                {book.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BooksGrid;
