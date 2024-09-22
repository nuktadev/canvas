import { getAllBooks } from "@/services/books/getAllBooks";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import BooksGrid from "./BooksGrid";
const AllBooks = async () => {
  const books = await getAllBooks([{ name: "limit", value: "10" }]);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex pb-5 justify-between items-center">
        <h1 className="text-xl font-medium sm:text-3xl sm:font-bold font-poppins text-secondary">
          Latest Books
        </h1>
        <Link className="no-underline" href="/books">
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
        <BooksGrid books={books?.data} />
      </div>
    </div>
  );
};

export default AllBooks;
