"use server";

import { TQueryParam } from "@/types/global";

export const getAllCourses = async (args?: any) => {
  const queryString = new URLSearchParams();

  if (args) {
    args.forEach((item: TQueryParam) => {
      queryString.append(item.name, item.value as string);
    });
  }
  const courses = await fetch(
    `${process.env.NEXT_BACKEND_API_BASE_URL}/courses${
      queryString ? `?${queryString.toString()}` : ""
    }`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  const { data } = await courses.json();
  if (courses.ok && data) {
    return data;
  } else {
    return [];
  }
};
