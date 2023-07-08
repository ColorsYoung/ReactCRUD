import './App.css';
import FormProduct from './component/FormProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormEditProduct from './component/FormEditProduct';

function App() {
  return (
    <BrowserRouter>
    <div>
        <h1>test</h1>

        <Routes>

            <Route path='/' element={<FormProduct/>}/>
            <Route path='/edit/:id' element={<FormEditProduct/>}/>

        </Routes>


        
    </div>
    </BrowserRouter>
  );
}

export default App;
