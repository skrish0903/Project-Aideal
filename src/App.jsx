import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/LoginPage/Login";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <div>
      <section>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="pricing" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
};

export default App;
