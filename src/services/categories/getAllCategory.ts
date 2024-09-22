"use server";

export const getAllCategories = async () => {
  const categories = await fetch(
    `${process.env.NEXT_BACKEND_API_BASE_URL}/categories`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  const { data } = await categories.json();
  if (categories.ok && data) {
    return data;
  } else {
    return [];
  }
};
