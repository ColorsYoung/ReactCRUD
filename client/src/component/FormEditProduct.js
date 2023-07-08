import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { read, update } from "../functions/product";

const FormEditProduct = () => {
  const params = useParams();
  const navigate = useNavigate()


  const [data, setData] = useState({
    name: "",
    detial:"",
    price:""
  });

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (id) => {
    read(id).then((res) => {
      setData(res.data);
    });
  };


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    update(params.id, data)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      FormEditProduct
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="ชื่อ-นามสกุล"
          value={data.name}
        />
        <br />

        <input
          type="text"
          name="detial"
          onChange={(e) => handleChange(e)}
          placeholder="รายละเอียด"
          value={data.detial}
        />
        <br />

        <input
          type="text"
          name="price"
          onChange={(e) => handleChange(e)}
          placeholder="ราคา"
          value={data.price}
        />
        <br />

        <button>ส่งข้อมูล</button>
      </form>
    </div>
  );
};

export default FormEditProduct;
