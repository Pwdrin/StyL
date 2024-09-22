import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Contato from "../pages/Contato";
import Shop from "../pages/Shop";
import Social from "../pages/Social";
const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
