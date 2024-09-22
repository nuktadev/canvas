"use server";

export const getSingleCategory = async (id: string) => {
  const category = await fetch(
    `${process.env.NEXT_BACKEND_API_BASE_URL}/categories/${id}`
  );
  const { data } = await category.json();
  if (category.ok && data) {
    return data;
  } else {
    return {};
  }
};
