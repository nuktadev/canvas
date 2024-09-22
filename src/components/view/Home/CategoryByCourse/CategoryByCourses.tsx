import { getAllCategories } from "@/services/categories/getAllCategory";
import CategoryGrid from "./CategoryGrid";

const CategoryByCourses = async () => {
  const categories = await getAllCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex pb-5 justify-between items-center">
        <h1 className="text-xl font-medium sm:text-3xl sm:font-bold font-poppins text-secondary">
          Category By Courses
        </h1>
      </div>
      <div className="flex w-full py-5 justify-between items-center">
        <CategoryGrid categories={categories} />
      </div>
    </div>
  );
};

export default CategoryByCourses;
