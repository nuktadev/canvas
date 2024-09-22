import { getAllCategories } from "@/services/categories/getAllCategory";
import SubCategoryCard from "./SubCategoryCard";
import { ICategory } from "@/types/global";

const SubCategoryByCourses = async () => {
  const categories = await getAllCategories();
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex pb-5 justify-between items-center">
        <h1 className="text-xl font-medium sm:text-3xl sm:font-bold font-poppins text-secondary">
          SubCategory By Courses
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories?.map((category: ICategory) => (
          <div className="flex flex-col  p-4 gap-2" key={category?._id}>
            <SubCategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryByCourses;
