import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: "",
    cover: null,
  });

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`http://localhost:8800/books/${id}`);
      setBook({ ...res.data, cover: null });
    };
    fetchBook();
  }, [id]);

  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", book.title);
    formData.append("description", book.description);
    formData.append("price", book.price);
    if (book.cover) formData.append("cover", book.cover);

    try {
      await axios.put(`http://localhost:8800/books/${id}`, formData);
      alert("Book updated successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Navigation/>
    {/* <form onSubmit={handleSubmit}>
      <input name="title" value={book.title} onChange={handleChange} required />
      <textarea name="description" value={book.description} onChange={handleChange} required />
      <input type="number" name="price" value={book.price} onChange={handleChange} required />
      <input type="file" name="cover" accept="image/*" onChange={handleChange} />
      <button type="submit">Update Book</button>
    </form> */}

    <form onSubmit={handleSubmit} className="container mt-4">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input
      type="text"
      className="form-control"
      id="title"
      name="title"
      value={book.title}
      onChange={handleChange}
      required
    />
  </div>
{book.title}
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea
      className="form-control"
      id="description"
      name="description"
      value={book.description}
      onChange={handleChange}
      rows="3"
      required
    ></textarea>
  </div>

  <div className="mb-3">
    <label htmlFor="price" className="form-label">Price</label>
    <input
      type="number"
      className="form-control"
      id="price"
      name="price"
      value={book.price}
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="cover" className="form-label">Cover Image</label>
    <input
      type="file"
      className="form-control"
      id="cover"
      name="cover"
      accept="image/*"
      onChange={handleChange}
    />
  </div>

  <button type="submit" className="btn btn-success">Update Book</button>
</form>
    </>
  );
};

export default UpdateBook;
