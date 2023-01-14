import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import Error from "./Error";
import Home from "./Home";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      {/* <Route exact path="/card/:id" element= {<ProductScreen/>}/> */}
      <Route path="*" element={<Error/>} />
    </Routes>
    
   </BrowserRouter>
  );
}

export default App;
