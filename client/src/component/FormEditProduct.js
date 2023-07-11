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
  const [fileold,setFileold] = useState()

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (id) => {
    read(id).then((res) => {
      setData(res.data);
      setFileold(res.data.file)
    });
  };


  const handleChange = (e) => {
    if (e.target.name === "file") {
      //
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    console.log(fileold)
    const formWithImageData = new FormData(); //encode
    for (const key in data) {
      formWithImageData.append(key, data[key]);
    }
      formWithImageData.append('fileold',fileold)
    update(params.id, formWithImageData)
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      FormEditProduct
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          type="file" 
          name="file" 
          onChange={(e) => handleChange(e)} />
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
