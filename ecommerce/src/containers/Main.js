import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Promo from "./Promo"
import Stores from "./Stores"
import FullNavbar from "../pages/FullNavbar";
import Categories from "../pages/Categories";
import ProductPage from "../pages/ProductPage"
const Main = () => {
    return (
      <>
        <FullNavbar />
        {/* <div>
                <Navbar />
                <Promo />
                <div className="But">
                    <button>Find store nearby</button>
                    <button>Saved Stores</button>
                </div>
                <Stores />
                <Footer />
            </div> */}
        <Categories />
        <ProductPage/>
      </>
    );
}

export default Main

