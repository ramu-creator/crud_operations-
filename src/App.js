import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./styles/styles.css"
import AddUsers from "./pages/AddUsers";
import GetUsers from "./pages/GetUsers";
import UpdateUsers from "./pages/UpdateUsers";
function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<GetUsers />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/update/:id" element={<UpdateUsers />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;