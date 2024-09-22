import { getAllSubCategories } from "@/services/categories/getAllSubCategories";
import Image from "next/image";
import Link from "next/link";
const SubCategoryCard = async ({ category }: { category: any }) => {
  const subCategories = await getAllSubCategories([
    { name: "limit", value: "20" },
  ]);

  // @ts-ignore
  const filterBySubCategory = subCategories?.data?.filter(
    (subCategory: any) => {
      return subCategory?.category_id?._id === category.id;
    }
  );

  return (
    <>
      {filterBySubCategory?.length > 0 && (
        <div className="flex bg-white shadow-lg rounded px-3 py-2 flex-col">
          <div className="">
            <h2 className="text-center py-2">{category?.title}</h2>
            <div className="w-full p-2 h-48">
              <Image
                src={category?.icon}
                alt="course"
                height={500}
                width={800}
                className="w-full rounded-t rounded-[10px] h-full"
              />
            </div>
          </div>

          <div className="flex py-2 flex-wrap justify-between items-center gap-3">
            {filterBySubCategory?.map((course: any) => (
              <div key={course?._id}>
                <Link
                  href={`/sub-category/${course?._id}`}
                  className="text-base sm:text-lg py-2 font-poppins text-mainBlue font-medium"
                  key={course?.category_id?.title}
                >
                  {course?.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SubCategoryCard;
