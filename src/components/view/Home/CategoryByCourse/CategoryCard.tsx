import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ICategory } from "@/types/global";
import Link from "next/link";

const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <div className="bg-white shadow-lg rounded">
      <div className="w-full p-2 h-48">
        <Image
          src={category?.icon}
          alt="course"
          height={500}
          width={800}
          className="w-full rounded-t rounded-[10px] h-full"
        />
      </div>
      <h3 className="text-center mt-3 pb-3  uppercase group-hover:text-main text-black text-base font-poppins pt-1">
        {category.title}
      </h3>
      <div className="flex p-2 justify-end  items-center">
        <Link
          href={`/courses/`}
          className="sm:py-2 py-1 flex justify-center group gap-2  transition duration-500 items-center px-2 sm:px-4 border border-main text-white bg-main text-sm sm:text-base rounded"
        >
          Buy Course
          <ArrowRightOutlined className="group-hover:translate-x-2 transition duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
