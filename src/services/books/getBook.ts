"use server";

export const getBook = async (id: string) => {
  const book = await fetch(
    `${process.env.NEXT_BACKEND_API_BASE_URL}/books/${id}`
  );
  const { data } = await book.json();
  if (book.ok && data) {
    return data;
  } else {
    return {};
  }
};
