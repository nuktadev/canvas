import { getAllSubCategories } from "@/services/categories/getAllSubCategories";
import { getAllCourses } from "@/services/courses/getAllCourses";
import React from "react";
import CoursesGrid from "./CoursesGrid";

const SubCategory = async ({ id }: { id: string }) => {
  const subCategoriesPromise = getAllSubCategories();
  const coursesPromise = getAllCourses([{ name: "limit", value: "20" }]);

  const [subCategories, courses] = await Promise.all([
    subCategoriesPromise,
    coursesPromise,
  ]);
  // @ts-ignore
  const filterBySubCategory = subCategories?.data?.filter((course: any) => {
    return course?.category_id?._id === id;
  });

  return (
    <div className="grid grid-cols-1 gap-5">
      {filterBySubCategory?.map((course: any) => (
        <CoursesGrid
          course={course}
          key={course?._id}
          courses={courses?.data}
        />
      ))}
    </div>
  );
};

export default SubCategory;
