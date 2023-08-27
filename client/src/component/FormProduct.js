import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//input
import { remove, create, showdata } from "../functions/product";
import { Button } from "@mui/material";
//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//icon
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

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
    if (e.target.name === "file") {
      //
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formWithImageData = new FormData(); //encode
    for (const key in form) {
      formWithImageData.append(key, form[key]);
    }

    console.log(formWithImageData);
    create(formWithImageData)
      .then((res) => {
        loadData();
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = async (id) => {
    remove(id)
      .then((res) => {
        loadData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">

      <TextField  id="outlined-basic" 
                  label="ชื่อ" 
                  name="name"
                  onChange={(e) => handleChange(e)}
                  variant="outlined" />
        <br />

        <TextField  id="outlined-basic" 
                    label="รายละเอียด" 
                    name="detial"
                    onChange={(e) => handleChange(e)}
                    variant="outlined" />       
        <br />

        <TextField  id="outlined-basic"
                    type="file"  
                    label="รูป" 
                    name="file"
                    onChange={(e) => handleChange(e)}
                    variant="outlined" 
                    focused /> 
        <br />

        <TextField  id="outlined-basic" 
                    type="number"  
                    label="ราคา" 
                    name="price"
                    onChange={(e) => handleChange(e)}
                    variant="outlined" />  
        <br />

        <Button variant="contained" type="submit">ส่งข้อมูล</Button>
      </form>


      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableHead>

          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Detial</TableCell>
            <TableCell>File</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>

        </TableHead>

        <TableBody>
          {data
            ? data.map((item, index) => (
              <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.detial}</TableCell>
                  <TableCell>{item.file}</TableCell>
                  <TableCell>{item.price}</TableCell>

                  <TableCell >
                    <DeleteForeverIcon color="error" onClick={() => handleRemove(item._id)}/>
                  </TableCell>

                  <TableCell>
                    <Link to={"/edit/" + item._id}>
                      <EditIcon/>
                    </Link>
                  </TableCell>

                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
};

export default FormProduct;
