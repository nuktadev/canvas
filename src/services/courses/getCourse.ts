"use server";

export const getCourse = async (id: string) => {
  const course = await fetch(
    `${process.env.NEXT_BACKEND_API_BASE_URL}/courses/${id}`
  );
  const { data } = await course.json();
  if (course.ok && data) {
    return data;
  } else {
    return {};
  }
};
