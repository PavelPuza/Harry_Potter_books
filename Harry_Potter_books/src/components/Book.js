import "./Book.css";
import "./OrderButton"
import OrderButton from "./OrderButton";

const Book = (props) => {
  return <div className="one-book">
      <h2>{props.bookTitle}</h2>
      <p className="one-book-description">{props.bookDescription}</p>
      <p>Hodnocení: {props.bookEvaluation} /10</p>
      <p className="book-price">{props.bookPrice}</p>
      <img src={props.bookImage} alt="" />
      <OrderButton/>
    </div>
};

export default Book;
