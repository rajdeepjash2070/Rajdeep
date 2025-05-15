import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: "",
    cover: null,
  });

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
    formData.append("cover", book.cover);

    try {
      await axios.post("http://localhost:8800/books", formData);
      alert("Book added successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Navigation/>
    {/* <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <input type="file" name="cover" accept="image/*" onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form> */}

<form onSubmit={handleSubmit} className="container mt-4">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input
      type="text"
      className="form-control"
      id="title"
      name="title"
      placeholder="Title"
      onChange={handleChange}
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea
      className="form-control"
      id="description"
      name="description"
      placeholder="Description"
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
      placeholder="Price"
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
      required
    />
  </div>

  <button type="submit" className="btn btn-primary">Add Book</button>
</form>

    </>
  );
};

export default AddBook;
