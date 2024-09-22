"use client";
import { List } from "antd";
import Link from "next/link";
import Image from "next/image";
import { IBook } from "@/types/global";
const BooksList = ({ books }: { books: IBook[] }) => {
  return (
    <div>
      <List
        grid={{
          gutter: 24,
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
        dataSource={books}
        renderItem={(item: IBook) => (
          <List.Item>
            <Link
              className="block bg-white rounded border border-gray-200 p-2 shadow-xl transition hover:border-black hover:shadow-pink-white/10"
              href={`/books/${item._id}`}
            >
              <div className="w-full rounded h-[200px]">
                <Image
                  src={item.cover_page}
                  height={800}
                  width={800}
                  quality={75}
                  alt="image"
                  className="w-full rounded h-full"
                />
              </div>

              <div className="p-2">
                <h2 className="mt-4 uppercase sm:text-base sm:font-semibold text-grayBlack">
                  {item.title}
                </h2>

                <div className="flex text-base pt-2 font-medium justify-between items-center gap-2">
                  <p className="mt-1 text-sm text-grayBlack">
                    Price:{item?.price}
                  </p>
                  <p>Writer:{item?.writer}</p>
                </div>
              </div>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BooksList;
