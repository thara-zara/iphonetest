import Home from "./components/Hom/Hom";
import { Route, Routes } from "react-router-dom";
import Singlep from "./components/Single/Singlep";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import Foot from "./components/Footer/Foot";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Singlep" element={<Singlep/>}/>
          <Route path="/ProductCategory" element={<ProductCategory/>}/>
      </Routes>
      <Foot/>
    </div>
  );
}

export default App;



