import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Restuarant from "./components/Restuarants.jsx";
import Home_page from "./components/Home_page.jsx";
import RestuarantMenu from "./components/RestuarantMenu.jsx";
import SecondaryHome from "./components/SecondaryHome.jsx";
import SearchFood from "./components/SearchFood.jsx";
import Checkout from "./components/Checkout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./Stored/store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page></Home_page>} />
          <Route element={<SecondaryHome></SecondaryHome>}>
            <Route path="/restuarant" element={<Restuarant></Restuarant>} />
            <Route
              path="/city/Ranchi/:id"
              element={<RestuarantMenu></RestuarantMenu>}
            />
            <Route
              path="/city/Ranchi/:id/search"
              element={<SearchFood></SearchFood>}
            ></Route>
          </Route>
          <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
