import BookForm from "./BookForm";
import { v4 as uuidv4 } from "uuid";

const NewBook = (props) => {
  const saveBookDataHandler = (receivedBookData) => {
    const bookData = {
      ...receivedBookData,
      id: uuidv4(),
    };
    console.log(bookData);
  };

  return (
    <div>
      <BookForm onSaveBookHandler={saveBookDataHandler} />
    </div>
  );
};

export default NewBook;
