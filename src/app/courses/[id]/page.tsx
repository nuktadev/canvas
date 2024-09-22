import CourseDetails from "@/components/view/Courses/CourseDetails";
import { getCourse } from "@/services/courses/getCourse";
import { Suspense } from "react";
import Loading from "./loading";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const course = await getCourse(params.id);

  return {
    title: `Coaching | Courses / ${course?.title}`,
    description: course?.description,
  };
}
const SingleCoursePage = async ({ params }: { params: { id: string } }) => {
  const course = await getCourse(params.id);
  return (
    <Suspense fallback={<Loading />}>
      <CourseDetails course={course} />
    </Suspense>
  );
};

export default SingleCoursePage;
