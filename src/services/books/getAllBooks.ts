"use server";

import { TQueryParam } from "@/types/global";

export const getAllBooks = async (args?: any) => {
  const queryString = new URLSearchParams();

  if (args) {
    args.forEach((item: TQueryParam) => {
      queryString.append(item.name, item.value as string);
    });
  }
  const books = await fetch(
    `${process.env.NEXT_BACKEND_API_BASE_URL}/books${
      queryString ? `?${queryString.toString()}` : ""
    }`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  const { data } = await books.json();
  if (books.ok && data) {
    return data;
  } else {
    return [];
  }
};
