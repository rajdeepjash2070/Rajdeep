import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "./Crud.css"
const Crud = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8800/books");
      setBooks(res.data);
      
    } catch (err) {
      console.error(err);
    }
  };
  console.log(books)

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div> 

        <Navigation/>
        <div className="d-flex justify-content-center mt-4">
        <Link to="/addbook" className="btn btn-success">Add Book</Link>
        </div>
<div className="container mt-4">
  <div className="cardrow">
    {books && books.map((book) => (
      <div className="column" key={book.id}>
        <div className="card" style={{width:"300px",height:"auto"}}>
          <img
            src={`http://localhost:8800/uploads/${book.cover}`}
            className="card-img-top"
            alt={book.title}
            style={{ objectFit: "cover", height: "300px" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text" style={{height:"auto",fontSize:"13px"}}>{book.description}</p>
            <p className="card-text fw-bold mt-4">₹ {book.price}</p>
            <div className=" ">
              <Link to={`/updatebook/${book.id}`} className="btn btn-primary me-2">
                Edit
              </Link>
              <button
                className="btn btn-danger "
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Crud;
