import { getAllCategories } from "@/services/categories/getAllCategory";
import { ICategory } from "@/types/global";
import SubCategory from "./SubCategory";

const CategoryCourses = async () => {
  const categories = await getAllCategories();
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto pb-8 sm:pb-16 max-w-lg text-center">
        <h2 className="text-2xl text-black font-bold sm:text-4xl">
          Category By Courses
        </h2>

        <p className="mt-4 text-base text-grayBlack">
          Learn from the best of the best in the field.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {categories?.map((course: ICategory) => (
          <div className="flex flex-col  p-4 gap-2" key={course?._id}>
            <SubCategory id={course?._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCourses;
