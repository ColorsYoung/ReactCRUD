import './App.css';
import FormProduct from './component/FormProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormEditProduct from './component/FormEditProduct';

///layout
import HeaderBar from "./layout/HearderBar";
import SideBar from './layout/Sidebar';
import { CssBaseline, Box } from "@mui/material";


function App() {
  return (
    <BrowserRouter>
        <>
    <CssBaseline />
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
    </>
    </BrowserRouter>
  );
}

export default App;
