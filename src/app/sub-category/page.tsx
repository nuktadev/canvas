import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Coaching | SubCategory",
  description: "This is SubCategory Page",
};
const SubCategoryPage = () => {
  return redirect("/courses");
};

export default SubCategoryPage;
