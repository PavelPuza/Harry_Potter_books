import Book from "./components/Book";
import data from "./data";

const App = () => {
  return (
    <div className="all-books">
      <Book
        bookTitle={data[0].title}
        bookPrice={data[0].price}
        bookImage={data[0].image}
        bookDescription={data[0].description}
        bookEvaluation={data[0].evaluation}
      />
      <Book
        bookTitle={data[1].title}
        bookPrice={data[1].price}
        bookImage={data[1].image}
        bookDescription={data[1].description}
        bookEvaluation={data[1].evaluation}
      />
      <Book
        bookTitle={data[2].title}
        bookPrice={data[2].price}
        bookImage={data[2].image}
        bookDescription={data[2].description}
        bookEvaluation={data[2].evaluation}
      />
      <Book
        bookTitle={data[3].title}
        bookPrice={data[3].price}
        bookImage={data[3].image}
        bookDescription={data[3].description}
        bookEvaluation={data[3].evaluation}
      />
      <Book
        bookTitle={data[4].title}
        bookPrice={data[4].price}
        bookImage={data[4].image}
        bookDescription={data[4].description}
        bookEvaluation={data[4].evaluation}
      />
    </div>
  );
};

export default App;
