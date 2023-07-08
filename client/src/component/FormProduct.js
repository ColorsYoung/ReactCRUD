import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import { remove, create, showdata } from "../functions/product";
const FormProduct = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
      showdata()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      create(form)
        .then((res) => {
          loadData();
        })
        .catch((err) => console.log(err));
    }


  const handleRemove = async (id) => {
      remove(id)
      .then((res) => {
        loadData();
      })
      .catch((err) => console.log(err));
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={e => handleChange(e)}
          placeholder="ชื่อ-นามสกุล"
        />
        <br />

        <input
          type="text"
          name="detial"
          onChange={e => handleChange(e)}
          placeholder="รายละเอียด"
        />
        <br />

        <input
          type="text"
          name="price"
          onChange={e => handleChange(e)}
          placeholder="ราคา"
        />
        <br />

      <button>ส่งข้อมูล</button>

      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Detial</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <th>{item.name}</th>
                  <td>{item.detial}</td>
                  <td>{item.price}</td>
                  <td onClick={() => handleRemove(item._id)}>Delete</td>
                  <td><Link to={'/edit/'+item._id}>Edit</Link></td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
