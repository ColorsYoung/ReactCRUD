import './App.css';
import FormProduct from './component/FormProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormEditProduct from './component/FormEditProduct';

///layout
import HeaderBar from "./layout/HearderBar";
import SideBar from './layout/Sidebar';
import { CssBaseline, Box } from "@mui/material";
import TestRedux1 from './component/TestRedux1';
import TestRedux2 from './component/TestRedux2';
//pages
import Register from './component/pages/auth/Register';
import Login from './component/pages/auth/Login';


function App() {
  return (
    <BrowserRouter>
    <>
    <CssBaseline />
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
    </Routes>
    <div className="app">
      <SideBar/>
      <main className="content">
      <HeaderBar/>
        <div className="content_body">
          <Box m="20px">

        <Routes>
            <Route path='/admin/viewdata' element={<FormProduct/>}/>
            <Route path='/edit/:id' element={<FormEditProduct/>}/>
        </Routes>

        </Box>
        </div>
      </main>
    </div>
    {/* <TestRedux1/>
    <TestRedux2/> */}
    </>
    </BrowserRouter>
  );
}

export default App;
