"use server";

import { TQueryParam } from "@/types/global";

export const getAllSubCategories = async (args?: any): Promise<any[]> => {
  const queryString = new URLSearchParams();

  if (args) {
    args.forEach((item: TQueryParam) => {
      queryString.append(item.name, item.value as string);
    });
  }
  const subCategories = await fetch(
    `${process.env.NEXT_BACKEND_API_BASE_URL}/sub-categories${
      queryString ? `?${queryString.toString()}` : ""
    }`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  const { data } = await subCategories.json();
  if (subCategories.ok && data) {
    return data;
  } else {
    return [];
  }
};
