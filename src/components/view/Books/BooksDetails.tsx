"use client";
import { IBook } from "@/types/global";
import { Button } from "antd";
import Image from "next/image";

const BooksDetails = ({ book }: { book: IBook }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex relative z-20 w-[50%] justify-center">
            <div className="bg-white m-16">
              <div className="absolute bg-gradient-to-r from-[#a3f4e6] to-[#6deccf] w-[10rem] md:w-[28rem] h-[5rem] md:h-[14rem] top-[20%] left-[1%] rounded-3xl -z-10 blur-[120px]"></div>
              <Image
                width={800}
                height={600}
                src={book?.cover_page}
                alt={book?.title}
                className="w-72 h-72 object-cover"
              />
            </div>
          </div>
          <div className="my-4 flex justify-start items-start flex-col gap-5 w-full  md:w-[50%]">
            <h2 className="text-2xl font-bold">
              Book Name: <span className="uppercase">{book?.title}</span>
            </h2>

            <p className="text-2xl font-bold">
              Price: ${book?.price ? book.price : 0}
            </p>

            <Button className="px-5" type="primary" block size="large">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksDetails;
