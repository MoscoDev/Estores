import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Main = () => {
    return (
        <>
            <div>
                <Navbar />
                <Footer />
                <div>
                    <button>Find store nearby</button>
                    <button>Saved Stores</button>
                </div>
            </div>
        </>
        
    )
}

export default Main

