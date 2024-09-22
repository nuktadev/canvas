import BooksDetails from "@/components/view/Books/BooksDetails";
import { getBook } from "@/services/books/getBook";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const book = await getBook(params.id);

  return {
    title: `Coaching | Books | ${book?.title}`,
    description: book?.writer ? book.writer : "No writer",
  };
}
const BookPage = async ({ params }: { params: { id: string } }) => {
  const book = await getBook(params.id);
  return (
    <div>
      <BooksDetails book={book} />
    </div>
  );
};

export default BookPage;
