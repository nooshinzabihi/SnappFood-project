
import VendorList from './components/VendorList';
import './stylesheets/vendor.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vendor from './components/Vendor'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<VendorList />} />
        <Route path=":id" element={<Vendor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
