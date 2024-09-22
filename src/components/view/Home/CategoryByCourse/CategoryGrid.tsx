import { ICategory } from "@/types/global";
import CategoryCard from "./CategoryCard";
const CategoryGrid = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className="grid grid-cols-1 w-full gap-3 md:gap-7 sm:grid-cols-2 md:grid-cols-3">
      {categories?.map((category: ICategory) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
